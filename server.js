import app from './app.js';
import { exec } from 'child_process';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        console.log('⏳ Verificando y creando base de datos si no existe...');
        await new Promise((resolve, reject) => {
            exec('npx prisma db push', (error, stdout, stderr) => {
                if (error) {
                    console.error(`❌ Error al ejecutar Prisma: ${stderr}`);
                    reject(error);
                } else {
                    console.log(`✅ Base de datos sincronizada:\n${stdout}`);
                    resolve();
                }
            });
        });

        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('❌ Error al iniciar el servidor:', error);
        process.exit(1);
    }
};

startServer();
