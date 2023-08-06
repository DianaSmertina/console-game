import Computer from "../players/computer";
const secureRandom = require("secure-random");
const crypto = require("crypto");

class Protection {
    static key: string;
    static gameHmac: string;

    generateKey() {
        const keySize = 32;
        Protection.key = secureRandom.randomBuffer(keySize).toString("hex");
    }

    generateHMAC() {
        this.generateKey();
        Protection.gameHmac = crypto
            .createHmac("sha256", Protection.key)
            .update(Computer.compMove)
            .digest("hex");
        console.log(`HMAC: ${Protection.gameHmac}`);
    }
}

export default Protection;
