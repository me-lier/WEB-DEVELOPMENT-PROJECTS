import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!💞</h1>");
})
app.get("/about", (req, res) => {
  res.send("<h1>Srinivas Deekonda!💞</h1>");
})
app.get("/contact", (req, res) => {
  res.send("<h1>Follow this link to Contact me! <hr/> <a  href='https://instagram.com/me_lier/'> Click here </a></h1>");
})

app.listen(port, () => {
  console.log("http://localhost:"+port+"/");
})