//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from 'body-parser';
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var pass = "";

app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("combined"));
function check(req, res, next){
    pass = req.body["password"];
    next();
}
app.use(check);

app.get("/",(req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
})
app.post("/check", (req,res)=>{
    console.log(req.body);
    if(pass === "Srinivas"){
        res.sendFile(__dirname + "/public/secret.html")
    }else{
        res.sendFile(__dirname + "/public/index.html");
    }
})

app.listen(port, ()=>{
    console.log("Server has been Started :-> http://localhost:"+port);
})