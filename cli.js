#!/usr/bin/env node
const fs = require("fs-extra");
const path = require("path");
const program = require("commander");

const TEMPLATES_DIR = path.join(__dirname, "templates");

program
  .version("0.0.1")
  .description("Create a React component template")
  .arguments("<componentName>")
  .action((componentName) => {
    const componentPath = path.join("Components", componentName);

    // Create the component directory
    try {
      fs.ensureDirSync(componentPath);
    } catch (err) {
      console.error(`Failed to create directory: ${err}`);
      process.exit(1);
    }

    // Create the component files
    const templateFiles = ["MyComponent.tsx", "text.ts", "useCustomHook.tsx"];

    templateFiles.forEach((file) => {
      const templatePath = path.join(TEMPLATES_DIR, file);

      // name the destination file based on the component name
      file = file.replace("MyComponent", componentName);

      const destinationPath = path.join(componentPath, file);
      try {
        fs.copySync(templatePath, destinationPath);
      } catch (err) {
        console.error(`Failed to copy file: ${err}`);
        process.exit(1);
      }
    });

    console.log(`React component '${componentName}' created successfully at ${componentPath}`);
  });

program.parse(process.argv);
