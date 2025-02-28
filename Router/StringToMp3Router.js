import express from 'express';
import { StringToMp3Controller } from '../Controllers/StringToMp3.js';

const router = express.Router();

router.post('/StrToMp3', StringToMp3Controller);

export default router;
