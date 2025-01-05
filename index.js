//@ts-check
const fs = require("fs");
const path = require("path");
const pkg = require("./package.json");

const scriptname = process.argv[2];

if (!scriptname) {
  console.error(`Usage: npm run add <script_path>`);
  process.exit(1);
}

createScript();

function createScript() {
  const template = `// ==UserScript==
// @name        ${pathToTitle(scriptname)}
// @match       *://example.org/*
// @grant       none
// @version     1.0
// @icon
// @author      ${pkg.author}
// @homepage    ${pkg.repository}
// @description
// ==/UserScript==
// @ts-check
(() => {
  //
})();
`;

  fs.writeFileSync(scriptname, template);
}

/** @param {string} str */
function pathToTitle(str) {
  return path
    .basename(str.replace(path.extname(str), ""))
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
