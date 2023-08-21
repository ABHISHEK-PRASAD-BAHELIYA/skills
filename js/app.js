
console.log("Hello World!");
console.log("Bansal college");
let a = 15;
let b = 5;
console.log("sum is : ", a+b);
let pencilPrice = 5;
let eraserPrice = 3;
//let output = "Total price is : " + (pencilPrice + eraserPrice) + "Rupee.";
let output = `the total price is : ${pencilPrice+eraserPrice} Rupees.`
//console.log("Total price is : ", pencilPrice + eraserPrice ,"Rupee.")
console.log(output)



//arithmatic operators
let x = 10;
let y = 5;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);

//unary operator
console.log(x++); //10
console.log(++x); //12 

//assignment operator
y = x;
console.log(x);

//comparison operators
let age = 18;
console.log(age <= 18);

//conditional statements
console.log("before my if statement");
let personAge = 14;
if(personAge>=18) {
    console.log("you can vote.");
    console.log("you can Drive.");
    let a = 5;
    console.log(5*a);
}
if(personAge>20) {
console.log("you are in your 20s.");
}
console.log("After my if statement");

if(personAge<18) {
    console.log("you can not vote.");
    console.log("you can not Drive.");
    let a = 5;
    console.log(5+a);
}


//conditional statement
let firstName = "Abhishek";
if(firstName == "Abhishek") {
console.log(`welcome ${firstName}`);
}