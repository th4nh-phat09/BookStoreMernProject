import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import bookRoute from './src/books/book.route.js'
import cors from 'cors'
dotenv.config();
const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}))
app.use(express.json())
app.use("/api/books", bookRoute)

async function main() {
        await mongoose.connect(process.env.DB_URL)
        app.get('/', (req, res) => {
    res.send('Hello World')
  })
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main().then(() => {
  console.log('Connected to MongoDB')
}).catch((err) => {
  console.log(err)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })

