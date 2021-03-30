const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const appJsFile = fs.readFileSync("./dist2/App.js");

async function readHTMLFile() {
  const dom = await JSDOM.fromFile("./dist2/index.html");
  const document = dom.window.document;
  const body = document.body;
  //   const head = document.head;
  const script = document.createElement("script");
  script.innerHTML = appJsFile.toString().replace(/<\/script>/g, `<\\/script>`);
  body.appendChild(script);
  fs.writeFileSync("./dist2/index.html", dom.serialize());
}

readHTMLFile();
