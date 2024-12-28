const fs = require("fs");
const path = require("path");

const CRUD = path.join(__dirname, "CRUD");
const myPath = `${CRUD}/crud.txt`;

//create 
fs.writeFileSync(myPath, 'Create Read Update Delete');

//read
// fs.readFile(myPath, 'utf-8', (err, file) => {
//     console.log(file);    
// })

//update 
// fs.appendFile(myPath, " in Node JS", (err) => {
//     if(!err){
//     console.log("Your File is updated successfully");
// }
// })

//delete
// fs.unlinkSync(myPath);

fs.rename(myPath, `${CRUD}/renameCRUD.txt`, (err) => {
    if(!err){
        console.log("Your File is renamed successfully")
    }
})