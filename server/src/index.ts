import dotenv from 'dotenv';
dotenv.config();
import express, { Application } from "express";
import { initPassport } from '@modules/auth/v1/passport'
import cors from 'cors';
import authRouter from '@modules/auth/v1/auth.router';
import companyRouter from '@modules/company/company.router';
import  cookieParser from 'cookie-parser'
const app: Application = express()
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(cookieParser());
app.use(express.json());
initPassport(app);
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/companies', companyRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})