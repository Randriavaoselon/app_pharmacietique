import fs from "fs";
import path from "path";
import * as parser from "@babel/parser";
import traverse from "@babel/traverse";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SRC_DIR = path.join(__dirname, "src");

// 1. Extraire la structure JSX et les styles
function extractNodeInfo(node) {
  if (!node) return null;

  let info = { type: "", children: [], style: {}, className: "" };

  if (node.type === "JSXElement") {
    info.type = node.openingElement.name.name || "Unknown";
    
    // Extraction des attributs (style et className)
    node.openingElement.attributes.forEach(attr => {
      if (attr.type === "JSXAttribute") {
        if (attr.name.name === "className" && attr.value?.value) {
          info.className = attr.value.value;
        }
        if (attr.name.name === "style" && attr.value?.expression?.type === "ObjectExpression") {
          attr.value.expression.properties.forEach(prop => {
            if (prop.key && prop.value) {
              info.style[prop.key.name] = prop.value.value || "Dynamic";
            }
          });
        }
      }
    });
    info.children = node.children.map(extractNodeInfo).filter(Boolean);
  } else if (node.type === "JSXFragment") {
    info.type = "Fragment";
    info.children = node.children.map(extractNodeInfo).filter(Boolean);
  } else {
    return null;
  }
  return info;
}

// 2. Analyser un fichier
function parseFile(filePath) {
  const code = fs.readFileSync(filePath, "utf-8");
  const ast = parser.parse(code, {
    sourceType: "module",
    plugins: ["jsx"]
  });

  let uiData = null;
  traverse(ast, {
    ReturnStatement(path) {
      const arg = path.node.argument;
      uiData = extractNodeInfo(arg);
    }
  });
  return uiData;
}

// 3. MAIN
function run() {
  const files = [];
  function getAllFiles(dir) {
    fs.readdirSync(dir).forEach(file => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) getAllFiles(fullPath);
      else if (file.endsWith(".jsx")) files.push(fullPath);
    });
  }

  getAllFiles(SRC_DIR);
  const result = {};

  files.forEach(file => {
    const name = path.basename(file, ".jsx");
    result[name] = parseFile(file);
  });

  fs.writeFileSync("ui-full-structure.json", JSON.stringify(result, null, 2));
  console.log("✅ Fichier 'ui-full-structure.json' généré avec succès !");
}

run();