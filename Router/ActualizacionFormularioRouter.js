import express from "express";
import { ActulizacionFormulario } from '../Controllers/ActualizacionFormulario.js'

const router = express.Router();

router.post('/ActualizacionForm', ActulizacionFormulario);

export default router;
