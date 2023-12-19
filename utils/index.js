const chalker = require("chalker");
const path = require("path");
const fs = require("fs-extra");

const TEMPLATES_DIR = path.join(__dirname, "../templates");

function generateTemplateFile(templateFiles, componentName, componentPath) {
  templateFiles.forEach((file) => {
    const templatePath = path.join(TEMPLATES_DIR, file);

    // name the destination file based on the component name
    file = file.replace("MyComponent", componentName);

    const destinationPath = path.join(componentPath, file);
    try {
      fs.copySync(templatePath, destinationPath);
    } catch (err) {
      console.log(chalker`<red>Failed to copy file: ${err}</red>`);
      process.exit(1);
    }
  });
}

module.exports = generateTemplateFile;
