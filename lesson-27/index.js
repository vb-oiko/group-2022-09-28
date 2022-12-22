// Огляд технології Node.js
// node.js
// відмінності коду для node.js від написання програми для браузера
// https://nodejs.dev/en/learn/differences-between-nodejs-and-the-browser/
// no document or window or other browser objects
// filesystem access, http requests APIs
// you control the environment (https://node.green/)
// both CommonJS and ES module support

// console.warn("Hello world");

// Відео за темою:
// https://www.youtube.com/playlist?list=PLTjRvDozrdlydy3uUBWZlLUTNpJSGGCEm
// https://www.youtube.com/watch?v=ENrzD9HAZK4
// https://www.youtube.com/watch?v=gG3pytAY2MY

// Створення сервера на Node.js
// туторіал за програмою на Node.js
// https://developer.mozilla.org/ru/docs/Learn/Server-side/Node_server_without_framework

const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer(function (request, response) {
    console.log("request ", request.url);

    const filePath = "." + request.url;
    if (filePath == "./") {
      filePath = "./index.html";
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
      ".html": "text/html",
      ".js": "text/javascript",
      ".css": "text/css",
      ".json": "application/json",
      ".png": "image/png",
      ".jpg": "image/jpg",
      ".gif": "image/gif",
      ".svg": "image/svg+xml",
      ".wav": "audio/wav",
      ".mp4": "video/mp4",
      ".woff": "application/font-woff",
      ".ttf": "application/font-ttf",
      ".eot": "application/vnd.ms-fontobject",
      ".otf": "application/font-otf",
      ".wasm": "application/wasm",
    };

    const contentType = mimeTypes[extname] || "application/octet-stream";

    fs.readFile(filePath, function (error, content) {
      if (error) {
        if (error.code == "ENOENT") {
          fs.readFile("./404.html", function (error, content) {
            response.writeHead(404, { "Content-Type": "text/html" });
            response.end(content, "utf-8");
          });
        } else {
          response.writeHead(500);
          response.end(
            "Sorry, check with the site admin for error: " +
              error.code +
              " ..\n"
          );
        }
      } else {
        response.writeHead(200, { "Content-Type": contentType });
        response.end(content, "utf-8");
      }
    });
  })
  .listen(8125);
console.log("Server running at http://127.0.0.1:8125/");

// Postman
// Знайомство з Postman
// Демонстрація роботи з Postman
// https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client

// Приклад створення сервера з express
// https://expressjs.com/en/starter/hello-world.html
// https://expressjs.com/ru/starter/hello-world.html
// Документація за express
