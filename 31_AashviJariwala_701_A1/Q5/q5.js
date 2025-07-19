const fs=require("fs");
const zlib=require("zlib");

fs.createReadStream("../files/myfile_zip.txt.gz")
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream("../files/myfile2_zip.txt"));

console.log("File unzipped");
