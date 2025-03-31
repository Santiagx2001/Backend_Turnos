import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ActualizacionHoraAtencion = async (req, res) => {
    const data = req.body;
    const fechaLocal = new Date().toLocaleString("sv-SE").replace(" ", "T");
    const FechaISO = fechaLocal+".000Z";
    try {
        const ActualizacionHoraAtencion = await prisma.turnos.updateMany({
            where: { NumeroDocumento_FK: data.NumeroDocumento },
            data: {
                HoraAtencion: FechaISO
            }
        })
        console.log("Hora de atencion actualizada correctamente");
        return res.json({ mensaje: "Hora de atencion actualizada correctamente" });
    } catch (error) {
        console.log("Error al actualizar la hora de atencion", error);
        return res.status(404).json({ error: "Error interno con el servidor" });
    }
}