import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getTurnosSinAtender = async (req, res) => {
    try {
        const turnos = await prisma.turnos.findMany({
            where: {
                HoraAtencion: null
            },
            include: {
                FormularioRegistro:true
            }
        });
        const turnosSinAtender = {
            PrimerNombre: turnos.FormularioRegistro.PrimerNombre,
            SegundoNombre: turnos.FormularioRegistro.SegundoNombre,
            PrimerApellido: turnos.FormularioRegistro.PrimerApellido,
            SegundoApellido: turnos.FormularioRegistro.SegundoApellido,
            NumeroDocumento: turnos.FormularioRegistro.NumeroDocumento,
            Turno: turnos.Turno

        }
        console.log(turnosSinAtender);
        return res.json(turnosSinAtender);
    } catch (error) {
        console.log("Error al enviar los datos de turnos sin atender", error)
        res.status(500).json({ error: error.message });
    }
    
}