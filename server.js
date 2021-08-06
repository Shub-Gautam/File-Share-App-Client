const express = require("express");

const app = express();

app.listen(8000, () => {
  console.log("Listening on port 8000");
});

app.use(express.static("./"));

app.get("/", () => {
  app.sendFile("index.html");
});
