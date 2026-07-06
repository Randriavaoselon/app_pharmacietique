import fs from "fs";
import path from "path";
import * as parser from "@babel/parser";
import traverse from "@babel/traverse"; // Import direct corrigé
import { fileURLToPath } from "url";

// 🔧 ES module fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, "src");

// 📁 récupérer tous les fichiers React
function getAllFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
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

// 🧠 extraction récursive du JSX tree
function extractJSX(node) {
  if (!node) return null;

  if (node.type === "JSXElement") {
    const name = node.openingElement.name;
    if (!name || name.type !== "JSXIdentifier") return null;
    return {
      type: name.name,
      children: node.children.map(extractJSX).filter(Boolean)
    };
  }

  if (node.type === "JSXFragment") {
    return {
      type: "Fragment",
      children: node.children.map(extractJSX).filter(Boolean)
    };
  }
  return null;
}

// 🧠 analyser un fichier React
function parseFile(filePath) {
  const code = fs.readFileSync(filePath, "utf-8");
  const ast = parser.parse(code, {
    sourceType: "module",
    plugins: ["jsx"]
  });

  let uiTree = null;

  // Maintenant 'traverse' est bien une fonction
  traverse(ast, {
    ReturnStatement(path) {
      const arg = path.node.argument;
      const result = extractJSX(arg);
      if (result) {
        uiTree = result;
      }
    }
  });

  return uiTree;
}

// 🚀 MAIN
const files = getAllFiles(SRC_DIR);
const result = {};

files.forEach(file => {
  const name = path.basename(file).replace(".jsx", "").replace(".js", "");
  const tree = parseFile(file);
  if (tree) {
    result[name] = tree;
  }
});

// 💾 export JSON
fs.writeFileSync("ui-structure.json", JSON.stringify(result, null, 2));
console.log("✅ UI structure générée avec succès !");