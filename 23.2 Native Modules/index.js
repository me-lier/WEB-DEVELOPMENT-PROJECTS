const fs = require("fs");

fs.writeFile("messages.txt","Hello Srinivas,", (err)=>{
    if(err) throw err;
    console.log("File saved Successfully");
});

fs.readFile("messages.txt", 'utf-8',(err, data) => {
    if(err) throw err;
    console.log(data);
})
