const fs = require("fs/promises");
const path = require("path");
const moment = require("moment-timezone");
const logError = async (controller, mess_err, res = null) => {
    try {
        const offset = moment().tz("UTC+7").format("YYYY-MM-DD HH:mm:ss z");
        const logDir = path.join(__dirname, "../../logfiles");
        const logPath = path.join(logDir, `${controller}.tex`);

        // Create logs directory if it doesn't exist
        await fs.mkdir(logDir, { recursive: true }).catch(() => { });

        const logMessage = `${mess_err} + ${offset}\n`;
        await fs.appendFile(logPath, logMessage);
    }
    catch (error) {
        console.log("Error writing to log file:", error);
    }
    
    if (res && typeof res.status === 'function') {
        res.status(500).send("Internal Server Error!");
    }
};

module.exports = { logError };

// const fs = require("fs/promises");
// const path = require("path");
// const moment = require("moment-timezone");

// const LOG_DIR = "/var/log/app";   // <-- docker mounted folder

// const logError = async (controller, mess_err, res = null) => {
//     try {
//         const offset = moment().tz("UTC+7").format("YYYY-MM-DD HH:mm:ss z");
//         const logDir = path.join(__dirname, "../../logfiles");
//         const logPath = path.join(logDir, `${controller}.tex`); 

//         await fs.mkdir(LOG_DIR, { recursive: true }).catch(() => { });

//         const logMessage = `${mess_err} + ${offset}\n`;
//         await fs.appendFile(logPath, logMessage);
//     } catch (error) {
//         console.log("Error writing to log file:", error);
//     }

//     if (res && typeof res.status === "function") {
//         res.status(500).send("Internal Server Error!");
//     }
// };

// module.exports = { logError };
