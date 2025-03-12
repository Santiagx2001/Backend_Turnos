import {PrismaClient} from "@prisma/client";

const prisma = PrismaClient();

export function getTurno (documento) {
    const llamarTurno = async(req, res) => {
        try {
            const dato = req.body;
        const GetTurno = await prisma.turno.findFirst({
            where: { numeroDocumento: documento }
        });
        return res.json(GetTurno);
        } catch (error) {
            console.log("erro en el servidor: ", error);
            return res.status(404).json({ error: "Error en el servidor" });
        }
    }
}