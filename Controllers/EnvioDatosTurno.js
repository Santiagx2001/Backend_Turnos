import express from "express";
import { PrismaClient } from "@prisma/client";
import { CreacionTurno } from "./CreacionTurno";

const prisma = new PrismaClient();

export function EnvioDatosTurno(NumeroDocumento, Cita) {
    const Turno = CreacionTurno(Cita);
    const obtenerFechaHoraActual = () => new Date().toISOString().slice(0, 19).replace("T", " ");
    const envio = async (req,res) => {
        try {
            const DatoTurno = await prisma.turnos.create({
                data: {
                    NumeroDocumento_FK: NumeroDocumento,
                    Turno: Turno,
                    HoraTurno: obtenerFechaHoraActual()
                }
            })
        } catch (error) {
            console.log("Error al enviar Datos", error);
            return res.status(500).json({ error:"Error interno del servidor"});
        }
    }
}