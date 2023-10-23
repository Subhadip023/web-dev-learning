import express from "express";
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Subhadip</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +916290765575</p>");
});

app.listen(port, () => {
  console.log(`Server started on port `);
});
