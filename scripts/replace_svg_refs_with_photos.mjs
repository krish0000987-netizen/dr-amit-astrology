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
let updatedCount = 0;

for (const file of srcFiles) {
  const original = fs.readFileSync(file, "utf8");
  const updated = original.replace(/\/images\/art\/([a-zA-Z0-9_\-]+)\.svg/g, "/images/photos/$1.jpg");
  if (updated !== original) {
    fs.writeFileSync(file, updated, "utf8");
    updatedCount++;
    console.log("Updated image references in:", path.relative(process.cwd(), file));
  }
}

console.log(`Updated ${updatedCount} files to use /images/photos/*.jpg.`);
