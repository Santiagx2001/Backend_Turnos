import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function CreacionTurno(cita) {
    if(cita == "no prioritaria") {
        let acumulador = 100;
        const dato = await prisma.turnos.findFirst({where:{Turno:{startsWith: "N",},},orderBy:{id_Turno: "desc",},take: 1,});
        console.log(dato);
        if(!dato || !dato.Turno) {
            return "N" + acumulador.toString();
        } else {
            let numeroTurno = parseInt(dato.Turno.slice(1), 10);
            console.log(numeroTurno)
            if (numeroTurno>=200) {
                console.log("valor de turno: 100");
                return "N" + acumulador.toString();
            } else { 
                console.log("devuelve un turno + 1");
                return "N" + (numeroTurno + 1).toString();
            }
        }

    } else if (cita != "no prioritaria") {
        let acumulador = 100;
        const dato = await prisma.turnos.findFirst({where:{Turno:{startsWith: "P",},},orderBy:{id_Turno: "desc",},take: 1,});
        if(!dato || !dato.Turno) {
            return "P" + acumulador.toString();
        } else {
            let numeroTurno = parseInt(dato.Turno.slice(1), 10);
            console.log(numeroTurno)
            if (numeroTurno>=200) {
                console.log("valor de turno: 100");
                return "P" + acumulador.toString();
            } else { 
                console.log("devuelve un turno + 1");
                return "P" + (numeroTurno + 1).toString();
            }
        }
    }
}
