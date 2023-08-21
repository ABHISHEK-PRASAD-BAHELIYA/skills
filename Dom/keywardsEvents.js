let btn = document.querySelector("button");

let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event) {
    
    console.log("code =" ,event.code); //ArrowUp(U) , ArrowDown(D), Arrow left(L)/right(R).
    if(event.code == "KeyU") {
        console.log("character moves forward");
    } else if(event.code == "KeyD") {
        console.log("character moves backward");
    } else if(event.code == "KeyL") {
        console.log("character moves Left");
    } else if(event.code == "KeyR") {
        console.log("character moves Right");
    }
});







// forms
let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // not go another page
    //alert("form sumitted");
    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");
console.dir(form);
let user = this.elements[0];
let pass = this.elements[1];

      console.log(user.value);
     console.log(pass.value); 
    
    alert (`Hi ${user.value}, your password is set to ${pass.value}`);
});