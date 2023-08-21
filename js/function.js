function name() {
    console.log("Abhishek singh");
    console.log("Atul kumar");
}
name();
//02
function print1to5() {
    for(let i=1; i<=5; i++) {
        console.log(i);
    }
}

print1to5();
//03
function isadult() {
    let age = 2;
    if(age>=18){
        console.log("Adult"); 
    } else {
        console.log("notAdult");
    }
}
isadult();


//practice QS 1
function printPoem() {
    console.log("twinkle twinkle, little star");
    console.log("How i wander, what you are.");
    console.log("up above the world so, high");
    console.log("like a diamond in the sky");
}

printPoem();

//practice QS 02 (rollDice)
function rollDice() {
    let rad = Math.floor(Math.random()*6)+1;
    console.log(rad);
}
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();
// function with arugments
function playerInfo(name, age) {
    console.log(`${name}'s age is ${age}.`);
}
playerInfo("rohan sharma", 18);
playerInfo("Reenu sharma", 15);
playerInfo("pankaj nigam");
// diff b/w console and return 
function sum(a,b) {
    console.log(a+b);
}
sum(2,4);
sum(2,48);
sum(800,200);

function diff(a, b) {
    console.log("hello");
    console.log("hello");
return a-b;
console.log("hello");
console.log("hello");
}

console.log(diff(1, 2));

//practice QS 03
function calcAvg(a, b, c) {
    let avg = (a+b+c)/3;
    console.log(avg,"is the avg value.");
}
calcAvg(5, 2, 9);
calcAvg(3, 3, 3);
calcAvg(30, 30, 40);

// practice QS 04
function printTable(n) {
    for(i=n; i<=n*10; i+=n) {
        console.log(i);
    }
}
printTable(3);

//ex return
function isadult(age) {
    if(age>= 18) {
        return "adult";
    } else{
        return "notAdult";
    }
    console.log("bye bye");
}

//practice QS 05
function getSum(n) {
    let sum = 0;
    for(i=1; i<=n; i++) {
        sum += i;
    }
    return sum;
}

// practice Qs 06 ( create a function that return  the concatentation(allstringko add karna) of all strings in an array)
let str = ["hi", "hello", "bye", "!"];

function concat(str) {
    let result = "";

    for(let i=0; i<str.length; i++) {
        result += str[i];
    }
    return result;

}