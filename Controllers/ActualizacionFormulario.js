import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const ActulizacionFormulario = async (req, res) => {
    const datos = req.body;
    try {
        const actualizarDatos = await prisma.formularioRegistro.update({
            where : datos.numeroDocumento,
            data: {
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
    } catch (error) {
        console.log("Error al enviar los datos");
        return res.status(404).json({ error: "Error interno con el servidor" });
    }
}