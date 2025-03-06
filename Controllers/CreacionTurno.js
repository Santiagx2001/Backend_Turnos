import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export function CreacionTurno(cita) {
    if(cita==1) {
        let acumulador = 100;
        const dato = prisma.tiposDeCitas_ID.findFirst({where:{turno:{contains: "N",},},orderBy:{idTurno: "desc",},take: 1,});

        if(dato==None) {
            return "N"+acumulador.toString();
        }

    }
}
