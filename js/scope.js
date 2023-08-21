let sum = 74; //Global scope

function getSum(a, b) {
let sum = a+b; //function scope
console.log(sum);
}
getSum(5, 8);

//Block scope {} (only let const follow this but var not)
{
    let a = 25;
    var b = 30;
    console.log(a); //(let const follow inside this {})
}
console.log(b);
 
for(let i=0; i<=5; i++) {
    console.log(i); //block scope
}
//console.log(i);

let age = 20;
if(age>18) {
    let str = "Adult";
    console.log(str);
}
//console.log(str);

//lexical scope
function outerFunc() { //function scope
    let x = 5;
    let y = 10;
    function innerFunc() {
        let a = 25;
        console.log(x);
        console.log(y);
    }
    console.log(a);
    innerFunc();
}
   

// practice qS 07 based on scope

let greet = "Hello"; //Global scope

function changeGreet() {
    let greet = "Namaste"; //function scope
    console.log(greet);
    function innerGreet() {
        console.log(greet);//lexical scope
    }
   // innerGreet();
}
console.log(greet);
changeGreet();


// function expression
let name = "Abhishek";
const add = function(a, b) {
return a+b;
}
let morning = function() {
    console.log("morning");
}
//update
morning = function() {
    console.log("good moroning");
}


// higher order functions
function multipleFruits(func, number) { //higher order function
    for(i=1; i<=number; i++) {
        func();
    }
}


let fruitsName = function() {
    console.log("Apple");
} 

multipleFruits(fruitsName,5)

//higher order function (return a function)



function oddorEvenFactory(request) {
    if(request == "odd") {
        let odd = function(n) {
            console.log(!(n%2 == 0));
        } 

        return odd;
        } else if(request == "even") {
            let even = function(n) {
                console.log(n%2 == 0);
            }

            return even;
        } else {
            console.log("wrong request");
        }
    }

    let request = "odd"; //even




    //Methods
    const calculator = {
        num: 55,
        add: function(a, b) {
            return a+b;
        },
        sub: function(a, b) {
            return a-b;
        },
        mul: function(a, b) {
            return a*b;
        }
    };
    // methods(shorthand)
    const calc = {
        
        add(a, b) {
            return a+b;
        },
        sub(a, b) {
            return a-b;
        },
        mul(a, b) {
            return a*b;
        }
    };