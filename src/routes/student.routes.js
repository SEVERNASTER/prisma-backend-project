
import prisma  from "../db.js";
import { Router } from 'express';

const router = Router()

router.get('/get-all-students', async (req, res) => {
    const students = await prisma.student.findMany()
    res.status(200).json(students)
})

export default router


