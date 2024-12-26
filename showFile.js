const path = require("path");
const fs = require("fs");

const myFolder = path.join(__dirname, "myFolder");
// console.log(myFolder);

// for(let i = 0; i < 3; i++) {
//     fs.writeFileSync(`${myFolder}/file${i}.txt`, `This is Node JS${i}`);
// }

fs.readdir(myFolder, (err, items) => {
    // console.log(items);
    items.forEach((err, file) => {
        console.log(file);
    })
})