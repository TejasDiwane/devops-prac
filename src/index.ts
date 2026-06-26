import express from "express"

const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.json({
        message:"build a pipeline"
    });
});

app.listen(3000);

