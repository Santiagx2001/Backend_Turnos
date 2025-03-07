import {PrismaClient} from "@prisma/client";
import { EnvioDatosTurno } from "./EnvioDatosTurno";

const prisma = new PrismaClient();

export const EnvioFormulario = async(req , res) => {
    const data = req.body;
    try {
        const EnvioFormulario = await prisma.formularioRegistro.create(
            {
                data:{
                    PrimerNombre: data.primerNombre,
                    SegundoNombre: data.segundoNombre,
                    PrimerApellido: data.primerApellido,
                    SegundoApellido: data.segundoApellido,
                    Localidad: data.Localidad,
                    NumeroDocumento: data.numeroDocumento,
                    FechaNacimiento: data.fechaNacimiento,
                    TipoDeDocumento_ID: data.tipoDocumento,
                    NumeroTelefono: data.numeroTelefono,
                    TipoDeCitas_ID: data.tipoDeCitas
                }
            })
        const envioDatosTurno = EnvioDatosTurno(data.numeroDocumento, data.tipoDeCitas);
    } catch (error) {
        console.log("error:", error);
        return res.status(500).json({ error:"Error interno del servidor"});
    }
};