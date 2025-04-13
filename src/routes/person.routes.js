
import prisma from '../db.js';
import { Router } from 'express';

const router = Router()

router.get('/get-all-people', async (req, res) => {
    const people = await prisma.person.findMany()
    res.status(200).json(people)
})

router.post('/create-person', async (req, res) => {
    try {
        const newPerson = await prisma.person.create({
            data: req.body
        })
        res.status(201).json(newPerson)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

export default router



