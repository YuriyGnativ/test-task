const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello World!");
});

app.listen(5000, () => {
  console.log("app running at 5000 port");
});
