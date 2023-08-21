let color = "red";

//traffic light system
if(color === "red") {
    console.log("Stop! light color is red");
}
if(color === "yellow") {
    console.log("Slow down. light color is yellow");
}
if(color === "green") {
    console.log("Go. light color is green");
}
// vote related
let bornDate = 15;
if(bornDate >= 18) {
    console.log("you can vote.");
}
else if (bornDate >= 18) {
     console.log("you cannot vote.");
}
else if (bornDate < 18) {
    console.log("you cannot vote2.");
}

//marks based statement

let marks = 72;
if(marks >= 90){
    console.log("A+")
}
else if (marks >= 80){
    console.log("A")
}
else if (marks >= 50){
    console.log("C")
}
else if (marks >= 33){
    console.log("D")
}
else if (marks <= 33){
    console.log("E")
}

//only else related problem

let condition = "apple";
if(condition === "push") {
    console.log("Door is opened!");
}
else if (condition === "pull") {
    console.log("Door is closed!");
}
else {
    console.log("Door is not work.")
}