const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const tipoDoc = await prisma.tipoDoc.create({
        data: {
            nombre: 'Cedula',
            descripcion: 'Documento Nacional de Identidad',
        },
    });

    const localidad = await prisma.localidad.create({
        data: {
            nombre: 'Engativa',
            descripcion: 'Localidad de la ciudad de Bogotá',
        },
    });

    const formulario = await prisma.formularios.create({
        data: {
            Nombres: 'Alexs',
            Apellidos: 'Quiroz',
            TipoDoc_id: tipoDoc.IDTipoDoc,
            NumDoc: 1019983865,
            FechaNacimiento: new Date('2003-09-10T00:00:00Z'),
            Localidad_id: localidad.IDLocalidad,
            NumTelefono: 3023208680, 
        },
    });

    console.log('Formulario creado:', formulario);
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });