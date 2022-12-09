import express from 'express';
import { a } from './test';

const app = express();

const PORT = 3333;
app.listen(PORT)

app.get("/", (request, response) => { 
    return response.json({ message: "Hello World" + a })
})