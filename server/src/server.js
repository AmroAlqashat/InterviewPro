import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);



app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));