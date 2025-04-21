import express from 'express';
import { authenticateJWT } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/dashboard', authenticateJWT, (req, res) => {
    res.json({ message: "Authorized" });
});

export default router;