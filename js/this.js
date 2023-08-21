//this 
const student = {
    name: "Abhishek",
    age: 20,
    eng: 95,
    math: 80,
    physic: 90,
    getAvg() {
        let avg = (this.eng + this.math + this.physic)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

//try and catch
console.log("hello");
console.log("hello");
try {
    console.log(a);
} catch(error) {
    console.log(error);
    console.log("caught an error...a is not defined");
}

console.log("hello2");
console.log("hello2");

//mi
//Arrow functions (=>)
let sum = (a, b) => {
    console.log(a+b);
};

const cube = (n) => { //when single use[ n = (n) ]
    return (n*n*n);
};

const pow = (a, b) => ( a ** b);
 
const hello = () => {
    console.log("hello world!");
};

// arrow fn (implict return)  [ {} => converts ();]
const mul = (a, b) => (a*b);

// set timeout
console.log("hi there!");

setTimeout(() => {
 console.log("apna Bansal"); 
}, 4000);

console.log("welcome to");
console.log("welcome to");
// set interval     ["stop" => clearinterval(id);]
 let id = setInterval(() => {
        console.log("apna Bansal");  
}, 2000);

console.log(id);

let id1 = setInterval(() => {
    console.log("Hello! Abhishek singh");  
}, 3000);

console.log(id1);

// this with arrow function
const student1 = {
    name: "rohan",
    age: 15,
    marks: 85,
    prop: this, //global scope
    getName: function() {
        return this.name;
    },
};
const a = 5; //global scope














//practice QS 01
// square of no.
const square = (n) => n*n; 
console.log(square(4));
console.log(square(12));


// hello world! print 5 times
let id3 = setInterval(()=>{
    console.log("hello world!");
}, 2000);

setTimeout(()=>{
    clearInterval(id3);
    console.log("clear interval run");
}, 10000);
