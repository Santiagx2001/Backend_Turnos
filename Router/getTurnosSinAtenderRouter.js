import { getTurnosSinAtender } from '../Controllers/getTurnosSinAtender.js';
import express from 'express';

const router = express.Router();

router.get('/getTurnosSinAtender', getTurnosSinAtender);

export default router;