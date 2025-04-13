
import express from "express";
import dotenv from "dotenv";
import prisma from "./db.js";
import studentRoutes from './routes/student.routes.js';
import personRoutes from './routes/person.routes.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/api', studentRoutes)
app.use('/api', personRoutes)

app.listen(PORT, () => {
    console.log('server running on port: ' + PORT);
    
})

app.get('/', (req, res) => {
    res.json({ message: 'server running!'})
})


