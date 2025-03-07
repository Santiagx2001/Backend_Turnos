import express from "express";
import { CreacionTurno } from "../Controllers/CreacionTurno";

const router = express.Router();

router.post('/CreateTurn', CreacionTurno);

//eliminar esta ruta