import fs from "fs";
import path from "path";

function getAllFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllFiles(fullPath, fileList);
    } else if (entry.name.endsWith(".ts") || entry.name.endsWith(".tsx")) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const srcFiles = getAllFiles(path.join(process.cwd(), "src"));
const imgRegex = /\/images\/[a-zA-Z0-9_\-\/.]+/g;
const referenced = new Set();

for (const file of srcFiles) {
  const content = fs.readFileSync(file, "utf8");
  const matches = content.match(imgRegex) || [];
  matches.forEach((m) => referenced.add(m));
}

let missing = 0;
for (const imgPath of referenced) {
  const diskPath = path.join(process.cwd(), "public", imgPath);
  if (!fs.existsSync(diskPath) || fs.statSync(diskPath).size === 0) {
    console.error("MISSING OR EMPTY IMAGE:", imgPath);
    missing++;
  }
}

console.log(`Verified ${referenced.size} unique image paths across ${srcFiles.length} source files.`);
if (missing === 0) {
  console.log("ALL IMAGE ASSETS PRESENT AND VALID (0 broken images).");
} else {
  process.exit(1);
}
