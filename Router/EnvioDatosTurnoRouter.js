import express from "express";
import { EnvioDatosTurno } from "../Controllers/EnvioDatosTurno.js";

const router = express.Router();

router.post('/EnvioDatosTurnos', EnvioDatosTurno);

export default router;

