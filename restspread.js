// function add(a,b,c){
//     return a+b+c;
// }
// console.log(add(4,5,6));
// function add(...numbers){
//     let total =0;
//     for (let i=0;i<numbers.length;i++){
//         total= total + numbers[i];
//     }
//     return total;

// }
function add(...numbers){
    let total =0;
    for (let i of numbers){
        total= total + i;
    }
    return total;

}
console.log(add(1,2,3,4,5));


let a=[1,2,3,34,45,88];
let[...last]=a;
console.log(a);

const isEven = (num) => (num % 2 === 0 ? "Even" : "Odd");
console.log(isEven(15)); 
console.log(isEven(8)); 


const averageMarks




