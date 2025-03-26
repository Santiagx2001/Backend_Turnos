import express from "express";
import { getActualizacion } from '../Controllers/getTurnoActualizacion.js'

const router = express.Router();

router.post('/getActualizacion', getActualizacion );

export default router;
