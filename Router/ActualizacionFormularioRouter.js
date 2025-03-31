import express from "express";
import { ActulizacionFormulario } from '../Controllers/ActualizacionFormulario.js'

const router = express.Router();

router.patch('/ActualizacionForm', ActulizacionFormulario);

export default router;
