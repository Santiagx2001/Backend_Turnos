import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export function CreacionTurno(cita) {
    if(cita==1) {
        let acumulador = 100;
        const dato = prisma.tiposDeCitas_ID.findFirst({where:{turno:{contains: "N",},},orderBy:{idTurno: "desc",},take: 1,});

        if(!dato) {
            return "N"+acumulador.toString();
        } else {
            let numeroTurno = parseInt(dato.slice(1), 10);
            acumulador = numeroTurno;
            if (acumulador==200) {
                return "N"+acumulador.toString();
            } else {
                acumulador += 1;
                return "N"+acumulador.toString();
                
            }
        }

    } else if (cita != 1) {
        let acumulador = 100;
        const dato = prisma.tiposDeCitas_ID.findFirst({where:{turno:{contains: "P",},},orderBy:{idTurno: "desc",},take: 1,});

        if(!dato) {
            return "P"+acumulador.toString();
        } else {
            let numeroTurno = parseInt(dato.slice(1), 10);
            acumulador = numeroTurno;
            if (acumulador==200) {
                return "P"+acumulador.toString();
            } else {
                acumulador += 1;
                return "P"+acumulador.toString();
            }
        }
    }
}
