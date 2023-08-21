// let heroes = [[ "Ironman", "Spiderman", "thor"], ["Batman", "superman", "hulk"]];

// for(list of heroes) {
// for(hero of list) {
//     console.log(hero)
// }
//}
   

//create a TodoApp using js
let todo = [];

let req = prompt("please enter your request");

while(true) {
    if(req == "quit") {
        console.log("quitting app");
        break;
    }

    if(req == "list") {
        console.log("--------------");
        for(let i=0; i<todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("--------------");
    } else if(req == "add") {
        let task = prompt("please enter the task you want add");
        todo.push(task);
        console.log("task added");
    } else if(req == "delete") {
        let idx = prompt("please enter the task index");
        todo.splice(idx, 1);
        console.log("task deleted")
    } else {
        console.log("wrong request");
    }
    req = prompt("please enter your request"); 
}



