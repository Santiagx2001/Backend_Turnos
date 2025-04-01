import { PrismaClient } from "@prisma/client";
import { EnvioDatosTurno } from "./EnvioDatosTurno";


const prisma = new PrismaClient();

export const EnvioFormulario = async(req , res) => {
    const data = req.body;
    console.log(data);
    try {
        const verificacion = await prisma.formularioRegistro.findMany({
            where: { NumeroDocumento: data.NumeroDocumento }
        })
        if (verificacion.length > 0) {
            console.log("El usuario ya esta registrado en la base de datos")
            return res.status(500).json({mensaje : "El usuario ya existe en la base de datos"})
        } else {
            const EnvioFormulario = await prisma.formularioRegistro.create(
                {
                    data:{
                        PrimerNombre: data.PrimerNombre,
                        SegundoNombre: data.SegundoNombre,
                        PrimerApellido: data.PrimerApellido,
                        SegundoApellido: data.SegundoApellido,
                        Localidad: data.Localidad,
                        NumeroDocumento: data.NumeroDocumento,
                        FechaNacimiento: new Date(data.FechaNacimiento),
                        TipoDeDocumento_ID: data.TipoDeDocumento_ID,
                        NumeroTelefono: data.NumeroTelefono,
                        TipoDeCitas_ID: data.TipoDeCitas_ID
                    }
                })
        }
        const datosTurno = await EnvioDatosTurno(data.NumeroDocumento, data.TipoDeCitas_ID);
        const Turno = {
            "PrimerNombre" : data.PrimerNombre,
            "SegundoNombre" : data.SegundoNombre,
            "PrimerApellido" : data.PrimerApellido,
            "SegundoApellido" : data.SegundoApellido,
            "NumeroDocumento" : data.NumeroDocumento,
            "Turno" : datosTurno.Turno,
            "Hora" : (datosTurno.HoraTurno).toISOString().split("T")[1].slice(0, 8)
        };
        return res.json(Turno);

    } catch (error) {
        console.log("error en envio de formulario:", error);
        return res.status(500).json({ error:"Error interno del servidor al enviar los datos"});
    }
};