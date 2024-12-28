// Javascript is asynchronou programming language
// console.log("a");
// console.log("b");
// console.log("c");



let firstName = "Asad";
let lastName = "";


const setLastName = new Promise((resolve, reject) => {
    setTimeout(() => {
        // lastName = " Khan";
        resolve("Khan");
    }, 2000)    
})
// setLastName.then((data) => {
//     lastName = data;
//     console.log(firstName + lastName);
// })

const displayFullName = async () => {
    lastName = await setLastName;
    console.log(`${firstName} ${lastName}`);
}
displayFullName();