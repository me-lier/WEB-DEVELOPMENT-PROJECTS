import express from "express";
import bodyParser from 'body-parser';
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("combined"));

var wday="";
var wadvice="";
function dayTell(req, res, next){
    const d = new Date();
    let day = d.getDay();
    if(day === 0 || day === 6){
        wday="Weekend";
        wadvice="Have Fun";
    }else{
        wday="Weekday";
        wadvice="Work Hard";
    }
    next();
}

app.use(dayTell);

app.get("/", (req, res)=>{
    res.render("index.ejs",
        {
            weekday: wday,
            work:wadvice,
        }
    )
})


app.listen(port, ()=>{
    console.log("Server has been started:-> http://localhost:"+port);
})