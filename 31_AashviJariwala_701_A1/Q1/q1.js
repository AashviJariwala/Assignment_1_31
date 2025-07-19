const express=require("express");
const app=express();

app.get("/getHello",async (req,res)=>{
    res.sendFile(__dirname+"/getHello.html");
});

app.listen(3000,()=>console.log("Server listening on port 3000"));