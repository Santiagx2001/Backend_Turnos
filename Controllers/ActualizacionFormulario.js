import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export function ActualizacionFormulario(datoConsulta, datoCambiar) {
    const envio = async (req, res) => {
        const data = req.body;
        try {
            const actualizacionFormulario = await prisma.formularioRegistro.update({
                where : { datoConsulta: datoCambiar }
            })
        } catch (error) {
            
        }
    }
} 