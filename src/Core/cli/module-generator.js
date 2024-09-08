const { existsSync, mkdirSync, writeFileSync } = require("fs");
const { join } = require("path");

const _files = [
  { folder: "entity", fileNameSuffix: "entity" },
  { folder: "service", fileNameSuffix: "service" },
  { folder: "repository", fileNameSuffix: "repository" },
  { folder: "facade", fileNameSuffix: "facade" },
  { folder: "validation", fileNameSuffix: "validation" },
  { folder: "route", fileNameSuffix: "route" },
  { folder: "resource", fileNameSuffix: "resource" },
  { folder: "middlewares", fileNameSuffix: "middlewares" },
];

class ModuleGenerator {
  constructor(basePath = "./src/Modules") {
    this.basePath = basePath;
  }

  generate(moduleName) {
    const capitalizedModuleName = this._capitalize(moduleName);
    const modulePath = join(this.basePath, capitalizedModuleName);

    _files.forEach(({ folder, fileNameSuffix }) => {
      const folderPath = join(modulePath, folder);
      this._createDirectory(folderPath);
      this._createFile(folderPath, `${moduleName}.${fileNameSuffix}.js`, "");
    });

    console.log(
      `Module '${capitalizedModuleName}' has been created successfully.`
    );
  }

  _createDirectory(dirPath) {
    if (!existsSync(dirPath)) {
      mkdirSync(dirPath, { recursive: true });
    }
  }

  _createFile(dirPath, fileName, content) {
    const filePath = join(dirPath, fileName);
    writeFileSync(filePath, content);
  }

  _capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

const generator = new ModuleGenerator();
const args = process.argv.slice(2);

if (args.length === 2 && args[0] === "make:module") {
  generator.generate(args[1]);
} else {
  console.log(
    "Usage: node src/Core/cli/module-generator.js make:module <module-name>"
  );
}
