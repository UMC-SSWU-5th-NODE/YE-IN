// common JS
// const express = require('express')
import express from "express"; // ES6 - 요즘 많이 씁니다

const app = express();
// const port = 3000;
const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "0000",
  database: "umc_node_test",
});
connection.connect();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
