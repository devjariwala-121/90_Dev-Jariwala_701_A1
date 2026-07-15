const fs = require("fs");
const archiver = require("archiver");

const output = fs.createWriteStream("MyFolder.zip");

const archive = archiver("zip",{
    zlib: {level: 9}
});

archive.pipe(output);
archive.directory("MyFolder/",false);
archive.finalize();

output.on("close", ()=> {
    console.log("Zip file Created Successfully.");
    console.log("Size: ", archive.pointer(), "bytes")
})