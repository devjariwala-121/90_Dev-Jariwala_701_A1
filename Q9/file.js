const fs = require("fs");

fs.writeFileSync("file.txt","Welcome to NodeJS Fs Module");
console.log("file is Created Succesfully");

const data = fs.readFileSync("file.txt","utf8");
console.log("File Data: ",data);

fs.appendFileSync("file.txt","\nThis is append Text");
console.log("Data Appended Succesfully");

fs.renameSync("file.txt","file1.txt");
console.log("File Renamed Succesfully");

if(fs.existsSync("file1.txt")){
    console.log("File Exists");
}

const stats = fs.statSync("file1.txt");
console.log("File size: ",stats.size,"bytes");

fs.unlinkSync("file1.txt");
console.log("File deleted succesfully");