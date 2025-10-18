// const user = {

//     id: "ahamed",
//     peice: 999,


//     welcomemessage: function (){

//         console.log(`${this.id}, welcome to the website`)
    
// }
// }

// user.welcomemessage()


// const addNumber= (num1, num2) =>{              //explict return//
// return num1 + num2
// }
// console.log(addNumber(5,8));




// const addNumber = (num1, num2) => (num1 + num2 )         //implicit retu//

// console.log(addNumber(5,8));

(function phone (){

console.log("CONNECTED TO CHARGER")
}
)();      //';' is remove the code is not running if you want to run two IIFE you have to give ";" at the end of the first syntex//

( (name) => {
    console.log(`CONNECTED TO CHARGER ${name}`);
    
})("ahamed")
