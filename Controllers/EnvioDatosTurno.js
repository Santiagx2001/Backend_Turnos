import { PrismaClient } from "@prisma/client";
import { CreacionTurno } from "./CreacionTurno";

const prisma = new PrismaClient();

export async function EnvioDatosTurno(NumeroDocumento, Cita) {
    try {
        const Turno = CreacionTurno(Cita);
        const obtenerFechaHoraActual = () => new Date().toISOString().slice(0, 19).replace("T", " ");
        const DatoTurno = await prisma.turnos.create({
            data: {
                NumeroDocumento_FK: NumeroDocumento,
                Turno: Turno,
                HoraTurno: obtenerFechaHoraActual()
            }
        });
        return DatoTurno;
    } catch (error) {
        console.log("Error al enviar Datos", error);
        return res.status(500).json({ error:"Error interno del servidor"});
    }
}
