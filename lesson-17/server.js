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
        console.warn(headers.cookie);
        response.setHeader("Set-Cookie", [
          "logged-in=false; HttpOnly;",
          "user-role=none; HttpOnly;",
        ]);
        response.end(`
            <html>
                <body>
                    <p>Hello world!</p>
                    <script>
                        console.log(document.cookie);
                        document.cookie = 'theme=dark;';
                        document.cookie = 'user-role=admin';
                        document.cookie = 'logged-in=true';
                    </script>
                </body>
            </html>`);
      });
  })
  .listen(8080);
