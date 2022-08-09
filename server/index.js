import express from "express";
import "dotenv/config";
const app = express();

app.get('/', (req, res) => {
    res.send("Hello Ram!")
})

app.listen(process.env.PORT, () => {
    console.log(`Server Running on port ${process.env.PORT}`)
})