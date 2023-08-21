// "Good string" program  made in Js QS 01.
let str = "apply";
if(str[0]=== 'a' && str.length>3) {
    console.log("good string"); 
} 
else {
    console.log("bad string");
}


// outuput of code QS02.
let num = 12;
if((num % 3 === 0) && ((num+1 === 15) || (num-1 === 11 ))) {
    console.log("safe");
}
else {
    console.log("unsafe");
}

// example of switch program
let color = "green";

 switch (color) {
    case "red":
        console.log("stop");
        break;
        case "yellow":
        console.log("slow down");
        break;
        case "green":
        console.log("Go");
        break;
        default :
         console.log("broken light");
 }



 // QS: use switch statement to print the day of the week using a number variable 'day' with value 1 to 7.
 let day = 8;
 switch (day) {
    case 1:
        console.log("monday");
        break;
        case 1:
        console.log("Tuesday");
        break;
        case 2:
        console.log("wednesday");
        break;
        case 3:
        console.log("Thrusday");
        break;
        case 4:
        console.log("Friday");
        break;
        case 5:
        console.log("saturday");
        break;
        case 7:
        console.log("sunday, fun day");
        break;
        default:
            console.log("wrong day!");


            alert("something is wrong!");
            console.log("this is simple log");
            console.error("this is simple error log")
           
            
            alert("this message is wrong!");
            console.warn("this is simple warning message");
            alert(" Do not move because Danger!");
            let firstName = prompt("Enter first name");
            let lastName = prompt("Enter  lastName");
            console.log("welcome",firstName ,lastName, "!");
 
            let roll = prompt("Enter your Roll no.");
               console.log(roll);  
 }
 // lower and upperto(); string methods
 let name ="Renu sharma";

 let msg = "   Ilovecoding  ";
let newMag = msg.trim().toUpperCase();
console.log(newMag);