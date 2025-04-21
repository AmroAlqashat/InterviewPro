import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import protectedRoutes from './routes/protectedRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));