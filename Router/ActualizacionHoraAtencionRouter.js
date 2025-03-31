import express from "express";
import { ActualizacionHoraAtencion } from '../Controllers/ActualizacionHoraAtencion.js'

const router = express.Router();

router.patch('/ActualizacionAtencion', ActualizacionHoraAtencion);

export default router;
