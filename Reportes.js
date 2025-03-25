import { hostname, version, uptime, freemem, totalmem, cpus } from 'os';
import { writeFileSync } from 'fs';

// Función para obtener la fecha y hora formateadas
const getFormattedDate = () => {
    const now = new Date();
    return {
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString().slice(0, 5)
    };
};

// Función para obtener información del sistema
const getSystemInfo = () => ({
    date: getFormattedDate().date,
    time: getFormattedDate().time,
    hostname: hostname(),
    kernel: version(),
    uptime: `${Math.floor(uptime() / 60)} mins`,
    memory: `${(freemem() / 1e9).toFixed(2)} / ${(totalmem() / 1e9).toFixed(2)} GB (${Math.round((freemem() / totalmem()) * 100)}%)`,
    cpu: `${cpus()[0].model} (${cpus().length} cores)`
});

// Generar el nombre del archivo
const { date, time } = getFormattedDate();
const fileName = `${date.replace(/\//g, '_')}_${time.replace(':', '_')}.json`;

// Guardar datos en un archivo
writeFileSync(fileName, JSON.stringify(getSystemInfo(), null, 2));

console.log("📄 Reporte generado correctamente");
console.log(`📌 Archivo guardado como: ${fileName}`);
console.table(getSystemInfo());
