import express from 'express';
import cors from 'cors';

import {
    StringToMp3Rute,
    CreacionTurno,
    EnvioFormulario
} from './Router/Routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', StringToMp3Rute); //http://localhost:3000/api/StrToMp3
app.use('/api', EnvioFormulario); //http://localhost:3000/api/Envioform
app.use('/api', CreacionTurno); //http://localhost:3000/api/CreateTurn


export default app;