const os = require('os');
const fs = require('fs');

// Obtener fecha y hora actual
const now = new Date();
const formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
const formattedTime = `${now.getHours()}:${now.getMinutes()}`;

// Obtener información del sistema
const systemInfo = {
    date: formattedDate,
    time: formattedTime,
    hostname: os.hostname(),
    kernel: os.version(),
    uptime: `${Math.floor(os.uptime() / 60)} mins`,
    memory: `${(os.freemem() / (1024 ** 3)).toFixed(2)} / ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB (${Math.round((os.freemem() / os.totalmem()) * 100)}%)`,
    cpu: os.cpus()[0].model + ` (${os.cpus().length} cores)`
};

// Nombre del archivo basado en la fecha y hora
const fileName = `${now.getDate()}_${now.getMonth() + 1}_${now.getFullYear()}_${now.getHours()}_${now.getMinutes()}.json`;

// Guardar la información en un archivo JSON
fs.writeFileSync(fileName, JSON.stringify(systemInfo, null, 4));

console.log("Reporte generado con éxito");
console.log("Nombre del archivo:", fileName);
console.table(systemInfo);
 //XD