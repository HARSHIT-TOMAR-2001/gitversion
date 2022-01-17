// $(document).keypress(function (e) { 
//     $("h1").text(e.key)
// });
// const supervillains = require('supervillains');
 
// supervillains.all.forEach(
//     function(e){
//         console.log(e);
//     }
// )
// console.log(supervillains.random())
const express = require('express')
const app = express()

app.use(express.urlencoded({
  extended: true
}))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/jq.html")
})

app.post("/result",function(req,res){
    console.log(req.body);
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
    console.log(n1);
    res.send(`<h1>Here is the sum= ${n1+n2}</h1>`);
})
app.listen("3000",function(){
    console.log("Starting server on port 3000");
})