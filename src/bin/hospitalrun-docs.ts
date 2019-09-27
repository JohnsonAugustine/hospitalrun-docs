#!/usr/bin/env node

// Get @hospitalrun/docs exports
import docPkg from "../exports";
import * as fs from "fs-extra";
import * as path from "path";

const Handlebars = require("handlebars");

const docPkgJSON = require("../../package.json");

// Set Current Working DIR and Templates
const cwd = process.cwd();
const templates = docPkg.templates;

Handlebars.registerHelper("html", function(x: any) {
  return new Handlebars.SafeString(x);
});

function createReadmeFromTemplate(pkgPath: string) {
  // Get the Package metadata
  let pkg = require(path.join(cwd, `${pkgPath}/package.json`));
  // Compile the Readme Template
  let docReadmeTemplate = Handlebars.compile(
    fs.readFileSync(path.join(__dirname, "./README.md.hbs")).toString()
  );
  console.log(path.join(cwd, `${pkgPath}/src/README.md`));
  // fetch the src/README
  let cwdSrcReadme = fs.readFileSync(path.join(cwd, `${pkgPath}/src/README.md`)).toString();
  console.log(cwdSrcReadme);
  // Combine the local template with the @hospital-run/docs templates
  let template = Handlebars.compile(docReadmeTemplate({ pkg, ...templates, Readme: cwdSrcReadme }));
  // Compile All Templates and Write the Readme File
  fs.writeFileSync(path.join(cwd, `${pkgPath}/README.md`), template({ pkg }));
}

const program = require("commander");

program.version(docPkgJSON.version);
program
  .command("generate")
  .description("generate documentation")
  .action(() => {
    createReadmeFromTemplate(".");

    // Add Github Templates
    const cwdGithubPath = path.join(cwd, "./.github");

    if (!fs.existsSync(cwdGithubPath)) {
      try {
        fs.copySync(templates.github_template_path, cwdGithubPath);
      } catch (err) {
        console.error(err);
      }
    }
  });

program.parse(process.argv);
