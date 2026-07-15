const Admzip = require("adm-zip");
const zip = new Admzip("MyFolder.zip");

zip.extractAllTo("./Extarcted",true);

console.log("Zip File extracted succeefully");