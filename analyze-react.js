import * as fs from "fs";
import * as path from "path";
import * as parser from "@babel/parser";
import traverse from "@babel/traverse"; // Correction : importation directe
import { fileURLToPath } from "url";

// 🔧 nécessaire en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, "src");

// 🔍 récupérer tous les fichiers React
function getAllFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files; // Sécurité si le dossier src est absent
  
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, files);
    } else if (file.endsWith(".jsx") || file.endsWith(".js")) {
      files.push(fullPath);
    }
  });

  return files;
}

// 🧠 analyser un fichier React
function parseFile(filePath) {
  const code = fs.readFileSync(filePath, "utf-8");

  const ast = parser.parse(code, {
    sourceType: "module",
    plugins: ["jsx"]
  });

  const imports = [];
  const usedComponents = [];

  // Correction : appel direct de la fonction traverse
  traverse(ast, {
    // 📌 imports
    ImportDeclaration({ node }) {
      const value = node.source.value;

      if (value.startsWith(".")) {
        const name = path.basename(value);
        imports.push(name.replace(".jsx", "").replace(".js", ""));
      }
    },

    // 📌 JSX components
    JSXOpeningElement(path) {
      const nameNode = path.node.name;

      if (nameNode && nameNode.type === "JSXIdentifier") {
        const name = nameNode.name;

        const htmlTags = [
          "div", "span", "h1", "h2", "h3", "p",
          "section", "article", "main", "header",
          "footer", "ul", "li", "button", "img", "a"
        ];

        if (!htmlTags.includes(name)) {
          usedComponents.push(name);
        }
      }
    }
  });

  return {
    imports: [...new Set(imports)],
    usedComponents: [...new Set(usedComponents)]
  };
}

// 🧱 build graph
function buildGraph(files) {
  const graph = {};

  files.forEach(file => {
    const name = path.basename(file).replace(".jsx", "").replace(".js", "");
    const parsed = parseFile(file);

    graph[name] = {
      imports: parsed.imports,
      usedComponents: parsed.usedComponents,
      children: {}
    };
  });

  return graph;
}

// 🔗 link graph
function linkGraph(graph) {
  const result = {};

  function resolve(name, visited = new Set()) {
    if (visited.has(name)) return null;
    visited.add(name);

    const node = graph[name];
    if (!node) return null;

    const children = {};

    const allDeps = [
      ...node.imports,
      ...node.usedComponents
    ];

    allDeps.forEach(dep => {
      const resolved = resolve(dep, new Set(visited));

      if (resolved) {
        children[dep] = resolved;
      } else {
        children[dep] = { imports: [], usedComponents: [], children: {} };
      }
    });

    return {
      imports: node.imports,
      usedComponents: node.usedComponents,
      children
    };
  }

  Object.keys(graph).forEach(name => {
    result[name] = resolve(name);
  });

  return result;
}

// 🚀 MAIN
const files = getAllFiles(SRC_DIR);
const graph = buildGraph(files);
const linked = linkGraph(graph);

fs.writeFileSync(
  "react-structure.json",
  JSON.stringify(linked, null, 2)
);

console.log("✅ Structure React générée !");