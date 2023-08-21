//const favMovie = "Major";

//let guess = prompt("guss my favourite movie");
//while( (guess != favMovie) && (guess != "quit")) {
  //   guess = prompt("wrong guess. please try again");
//}

   //if (guess == favMovie) {
    //console.log("congrats!!");
  // }    

   //loops with arrays
   //let fruits = ["mango", "apple", "banana", "grapes", "orange"];

   //for(let i=0; i<fruits.length; i=i+1) {
   //  console.log(i, fruits[i]);
   //}

   //loops with nested arrays
   let heroes = [
       ["ironman", "spiderman", "thor"],
       ["superman", "wonderman", "flash"]
     ]
 for(i=0; i<heroes.length; i++) {
     console.log(i,heroes[i], heroes[i].length);
     for(let j=0; j<heroes[i].length; j++) {
      console.log(`j=${j}, ${heroes[i][j]}`);
     }
 }

 //example two(2)
 let students = [ ["atulkumar", 95], ["rohitsahu", 92.50], ["Abhisheksingh", 99.9], ["adityasahu", 97.52]];
 
 for(let i=0; i<students.length; i++) {
  console.log(`info of students #${i}`);

  //for(let j=0; j<students[i].length; j++) {
  //  console.log(students.length[i][j]);
  }
 //}

 //apply for of loops
 let fruits = ["mango", "Apple", "Banana", "orange", "grapes"];

 for(fruName of fruits) {
  console.log(fruName);
 }

 for(char of "Abhisheksing") {
  console.log(char);
 }