const path = require("path");
const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    "pages",
    req.url === "/" ? "home.html" : req.url === "/home" ? "home.html" : req.url
  );

  fs.readFile(filePath, (err, content) => {
    // if (err) throw err;
    res.writeHead(200, { "Content-Type": `text/html` });
    res.end(content);
  });
});

const port = 5000;

server.listen(port, () => console.log(`Server running on port ${port}`));
