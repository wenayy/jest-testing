import express from "express";

export const app = express();
//app.listen(900);
app.use(express.json());

app.get("/", async (req, res) => {
    res.send("hello world")
})

app.post("/add",(req,res)=>{
    const { a, b } = req.body;
    const result = a + b;
    res.json({ result });


    // no app.listen here because it will test will import this and it will start running the file that's why we seperate out in bin.ts
})