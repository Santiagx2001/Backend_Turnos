import express from 'express';
import { EnvioFormulario } from '../Controllers/EnvioFormulario.js'

const router = express.Router();

router.post('/Envioform', EnvioFormulario);

export default router;

