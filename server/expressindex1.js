import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app =express();
const  __filename=fileURLToPath(import.meta.url);
const  __dirname=path.dirname(__filename);
const port=3000;

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"view","toggle.html"))
})

app.use(express.static(path.join(__dirname,"view")))

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})