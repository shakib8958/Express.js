const express=require("express");
//console.log(express())
const app=express();
app.get("",(req,resp)=>{
    //console.log("req data:",req)
    //console.log("req data:",resp)
    resp.send("hello students...")

})
//app.listen(4500)
//console.log("my server is working..")
app.listen(4500,function(){
    console.log("my server is working..")

})