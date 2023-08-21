let popcornSize = "m"
if(popcornSize === "xl") {
    console.log("The price is Rs. 250");
}
else if(popcornSize === "l") {
    console.log("The price is Rs. 200");
}
else if(popcornSize === "m") {
    console.log("The price is Rs. 100");
}
else if(popcornSize === "s") {
    console.log("The price is Rs. 50");
}



// example of nested if-else
 let marks = 90;

 if(marks >= 33) {
    console.log("pass");
    if(marks >= 80) {
        console.log("grade : o")
    }
    else {
        console.log("A")
        
    }
 }
 else {
    console.log("Better luck next time!");
 }


//  example of logical operators
let number = 90;

if (number >= 33 && number >= 80){
console.log("pass");
console.log("A+"); 
}

