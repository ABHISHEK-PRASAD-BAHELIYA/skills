//QS.1
let months = ["january", "july", "march", "august"];
//QS.2
let codinglang = ["c", "c++", "html", "javascript", "python", "java", "c#", "SQl"];
 

//QS . 01 (TIC-TOE-TOE Game made)
let game = [['x', null, 'o'], [null, 'X', null], ['o', null, 'x']];

//print odd numbers
for(i=1; i<=20; i=i+2) {
    console.log(i);
}
console.log("backward");
for(i=20; i>=1; i=i-2) {
    console.log(i);
}
//even number
console.log("even number");
for(i=2; i<=20; i=i+2) {
    console.log(i);
}
console.log("backward");

for(i=10; i>=2; i=i-2) {
    console.log(i);
}
console.log("18 ka Table");
// print the multiplication for 5 (table 5 ka)
for(i=18; i<=180; i=i+18) {
    console.log(i);
}
//project based on tables
let n = prompt("write your number");
n = parseInt(n);
for(i=n; i<=n*10; i=i+n) {
    console.log(i);
}
//nested loop 
for(i=2; i<=20; i=i+2) {
    for(j=2; j<=20; j=j+2) {
    console.log(j);
    } 
}