import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getTurnosSinAtender = async (req, res) => {
    try {
        const turnos = await prisma.turnos.findMany({
            where: {
            HoraAtencion: null
            }
        });
        console.log(turnos);
        return res.json(turnos);
    } catch (error) {
        console.log("Error al enviar los datos de turnos sin atender", error)
        res.status(500).json({ error: error.message });
    }
    
}