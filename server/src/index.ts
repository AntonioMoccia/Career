import dotenv from 'dotenv';
dotenv.config();
import express, { Application } from "express";
import { initPassport } from '@modules/auth/v1/passport'
import cors from 'cors';
import authRouter from '@modules/auth/v1/auth.router';

const app: Application = express()
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
initPassport(app);
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth/v1', authRouter);
app.use("/", (req, res) => {
    res.send("Welcome to Career Flow API")
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})