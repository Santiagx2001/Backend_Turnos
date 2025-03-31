import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const ActulizacionFormulario = async (req, res) => {
    const datos = req.body;
    try {
        const actualizarDatos = await prisma.formularioRegistro.update({
            where : {NumeroDocumento: datos.NumeroDocumento},
            data: {
                PrimerNombre: datos.PrimerNombre,
                SegundoNombre: datos.SegundoNombre,
                PrimerApellido: datos.PrimerApellido,
                SegundoApellido: datos.SegundoApellido,
                Localidad: datos.Localidad,
                NumeroDocumento: datos.NumeroDocumento,
                FechaNacimiento: new Date(datos.FechaNacimiento),
                TipoDeDocumento_ID: datos.TipoDeDocumento_ID,
                NumeroTelefono: datos.NumeroTelefono,
                TipoDeCitas_ID: datos.TipoDeCitas_ID
            }
        })
        console.log("Datos actualizados correctamente");
        return res.json({mensaje: "Datos actualizados correctamente"});
    } catch (error) {
        console.log("Error al enviar los datos", error);
        return res.status(404).json({ error: "Error interno con el servidor" });
    }
}