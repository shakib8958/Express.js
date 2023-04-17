//how to make the static page in exprss .js
const express = require("express");
const res=require("express/lib/response");
const app=express();
const path=require("path");

const getPublicPath = path.join(__dirname,"public")
//jus make the express function
app.use(express.static(getPublicPath));
//app.get("/about",(req,resp)=>{
//resp.sendFile('${getPublicPath}/about.html')
//})


//app.get("",(req,resp)=>{
    //just make the routing
    //resp.send("this is home page ")
//})
//just make th4 server
app.listen(4500,function(){
    console.log("my server is working...")
})