const express = require('express');
const app = express();
const port = 3000;

app.get('/test', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.send('{\"message\": \"Hello World from Node.js server!\"}');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});