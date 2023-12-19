#!/usr/bin/env node
const generateTemplateFile = require("./utils/index");
const fs = require("fs-extra");
const path = require("path");
const program = require("commander");
const chalker = require("chalker");

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

    generateTemplateFile(templateFiles, componentName, componentPath);

    console.log(
      chalker`<blue> ✌️✌️✌️ React component '${componentName}' created successfully at ${componentPath} ✌️✌️✌️</blue>`
    );
  });

program.parse(process.argv);
