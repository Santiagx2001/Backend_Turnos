import express from 'express';
import cors from 'cors';

import {
    StringToMp3Rute,
    EnvioFormularioRouter,
    EnvioDatosTurnoRouter,
    ActualizacionFormularioRouter
} from './Router/Routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', StringToMp3Rute); //http://localhost:3000/api/StrToMp3
app.use('/api', EnvioFormularioRouter); //http://localhost:3000/api/Envioform
app.use('/api', EnvioDatosTurnoRouter); //http://localhost:3000/api/EnvioDatosTurnos
app.use('/api', ActualizacionFormularioRouter); //http://localhost:3000/api/ActualizacionForm



export default app;