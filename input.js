// const r1 = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// r1.question("Enter something: ",
// (answer) => {
//     console.log("You entered:",answer);
//     r1.close();
// });
const calc = () => ({
    add: (a,b) => a+b,
    sub: (a,b) => a-b,
    mul: (a,b) => a*b,
    div: (a,b) => (b===0 ?)
})
// const Student = {
//     name : "Abhi",
//     age : 33,
//     address : {
//         city : "GZB",
//         state : "UP"
//     }
// }