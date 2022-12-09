import express from 'express';
import { createCourse } from './routes';
const app = express();

app.use(express.json());

const PORT = 3333;
console.log("cavalo")

app.get("/", createCourse)
app.get("/a", (req, res) => { 
  console.log("cavalo")

  const { name } = req.body
  console.log(name)
  res.json({ message: "Hello World" })
})

app.listen(PORT, () => {
  console.log(`🚀 server started at http://localhost:${PORT}`)
})