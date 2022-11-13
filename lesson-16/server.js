const http = require("http");
const querystring = require("querystring");

http
  .createServer((request, response) => {
    const { headers, method, url } = request;
    console.warn(method);
    let body = [];
    request
      .on("error", (err) => {
        console.error(err);
      })
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = querystring.parse(Buffer.concat(body).toString("utf-8"));
        response.end(`
            <html>
                <body>
                    <pre>${JSON.stringify(body, null, 4)}</pre>
                </body>
            </html>`);
      });
  })
  .listen(8080);
