const { resolve } = require("path");
const { readdir, writeFile } = require("fs").promises;

const findAllFiles = async (dir) => {
  const skip = [".git", "node_modules", ".env"];
  const items = await readdir(dir, { withFileTypes: true });

  const filtered = items.filter((item) => !skip.includes(item.name));

  const files = await Promise.all(
    filtered.map((item) => {
      const fullPath = resolve(dir, item.name);
      return item.isDirectory() ? findAllFiles(fullPath) : fullPath;
    })
  );

  return files.reduce((arr, files) => arr.concat(files), []);
};

findAllFiles("../../../projects")
  .then((files) => {
    const joined = files.join("\n");
    writeFile(resolve(__dirname + "/output/returnedFiles.txt"), joined);
  })
  .catch((err) => console.log(err));
