import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getActualizacion = async(req, res) => {
    const dato = req.body;
    try {
        const consultaDatos = await prisma.formularioRegistro.findFirst({
            where : {NumeroDocumento: dato.NumeroDocumento}
        })
        if (!consultaDatos) {
            console.log("No se encontro el usuario")
            return res.status(400).json({ error: "No se encontraron los datos solicitados"});
        }
        console.log(consultaDatos);
        return res.json(consultaDatos);
    } catch (error) {
        console.log("Error al obtener el dato");
        return res.status(404).json({error: "error interno del servidor"});
    }
}