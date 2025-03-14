import { PrismaClient } from "@prisma/client";
import { CreacionTurno } from "./CreacionTurno";

const prisma = new PrismaClient();

export async function EnvioDatosTurno(NumeroDocumento, Cita) {
    try {
        const Turno = await CreacionTurno(Cita);
        const fechaLocal = new Date().toLocaleString("sv-SE").replace(" ", "T");
        const FechaISO = fechaLocal+".000Z";
        const DatoTurno = await prisma.turnos.create({
            data: {
                NumeroDocumento_FK: NumeroDocumento,
                Turno: Turno,
                HoraTurno: FechaISO,
                HoraAtencion: null
            }
        });
        console.log(DatoTurno.HoraTurno);
        return DatoTurno;
    } catch (error) {
        console.log("Error al enviar Datos del turno", error);
        return { error:"Error interno del servidor", detalles: error };
    }
}
