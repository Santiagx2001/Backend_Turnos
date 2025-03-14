import { PrismaClient } from "@prisma/client";
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
                    Localidad: data.localidad,
                    NumeroDocumento: data.numeroDocumento,
                    FechaNacimiento: new Date(data.fechaNacimiento).toISOString(),
                    TipoDeDocumento_ID: data.tipoDocumento,
                    NumeroTelefono: data.numeroTelefono,
                    TipoDeCitas_ID: data.tipoDeCitas
                }
            })
        const datosTurno = await EnvioDatosTurno(data.numeroDocumento, data.tipoDeCitas);
        const Turno = {
            "PrimerNombre" : data.primerNombre,
            "SegundoNombre" : data.segundoNombre,
            "PrimerApellido" : data.primerApellido,
            "SegundoApellido" : data.segundoApellido,
            "Turno" : datosTurno.Turno,
            "Hora" : (datosTurno.HoraTurno).toISOString().split("T")[1].slice(0, 8)
        };
        return res.json(Turno);

    } catch (error) {
        console.log("error en envio de formulario:", error);
        return res.status(500).json({ error:"Error interno del servidor"});
    }
};