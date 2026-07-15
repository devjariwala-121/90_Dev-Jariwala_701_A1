const { error } = require("console");
const fs = require("fs");
const util = require("util");

const unlinkFile = util.promisify(fs.unlink);

unlinkFile("file.txt")
    .then(()=>{
        console.log("File Deleted Succefully");
    })
    .catch(()=>{
        console.log("Error: ",err.message);
    })