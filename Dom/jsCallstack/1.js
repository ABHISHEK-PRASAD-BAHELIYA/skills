// function hello() {
//     console.log(" inside hello fxn");
//     console.log("hello");
// }

// function demo() {
//     hello();
// }

// console.log("callling for demo fxn");
// demo();

// console.log("done, bye!");


// // visualizing the call stacks
// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }
// three();

// // js is single threaded
// let a = 10;
// console.log(a);

// let b = 12;
// console.log(b);

// let ans = a + b;
// console.log(ans);

//        //or  (setTimeout fxn is achronaus)
// setTimeout ( function() {
// console.log("Apna Bansal");
// }, 2000);

// setTimeout ( function() {
//     console.log("Apna Abhishek");
//     }, 2000);


// console.log("hello...");  


         //1. problem face achoronus nature in js (callHell)
                //or
        //apply promises in colorchanger (previous code press ctrl+z)        
  h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
     setTimeout(() => {
    h1.style.color = color;
   //if(nextColorchange) nextColorchange();
   resolve("color changed!");
}, delay);   
    })
}

changeColor ("red", 1000)
.then(() => {
    console.log("red color was changed");
    return changeColor("orange", 1000);
})
.then(() => {
    console.log("orange color was changed");
    return changeColor("green", 1000);
})
.then(() => {
    console.log("green color was changed");
    return changeColor("blue", 1000);
})
.then(() => {
    console.log("blue color was changed");
    return changeColor("pink", 1000);
})
.then(() => {
    console.log("pink color was changed");
   //return changeColor("orange", 1000);
})

// changeColor ("red", 1000, () => {
//     changeColor ("orange", 1000, () => {
//         changeColor ("green", 1000, () => {
//             changeColor ("blue", 1000, () => {
//                 changeColor ("yellow", 1000, () => {

//                 });      
//             });                  //  callbacks nesting -> callback hell
//         });
//     });

// });


  
//  setTimeout(() => {
//     h1.style.color = "orange";
//  }, 1000);

//  setTimeout(() => {
//     h1.style.color = "white";
//  }, 2000);

//  setTimeout(() => {
//     h1.style.color = "green";
//  }, 3000);
       

// promises

// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4) {
//       success();
//     } else {
//       failure();
//     }
    
// }


// savetoDb("apna Abhishek", () => {
//     console.log(" success: your data is saved");
//     savetoDb("Hello, indian officers", () => {
//         console.log(" success2: data2 saved");
//     savetoDb("Hello, Renu sharma",  () => {
//             console.log(" success3: your data is saved");
//         }, 
//         () => {
//             console.log(" failure3: Weak connection, your data is not saved");
//         });
//     }, () => {
//         console.log(" failure2: Weak connection");
//     });
// },
//  () => {
//     console.log(" failure: Weak connection, your data is not saved");
// });


       //promises
//     function savetoDb(data) {
//      return new Promise((resolve, reject) => {
//      let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4) {
//         resolve( "success : data was saved");
//     } else {
//         reject("failure : weak connection");
//     }
//      });
// }


//promise(then, catch) then use with resolved and catch used with reject.
 
// savetoDb("I am indian")  //req = promise object
//  .then(() => {
//      console.log("promise was resolved");
     
//  })
//     .catch(() => {
//         console.log("promise was rejected");
    
//     });


    //promise chainning (more then are used)
    // or result and error in promises

//   savetoDb("india Army solider")

//  .then((result) => {
//      console.log("data1 resolved");
//      console.log("result of promise: ", result);
//      return savetoDb("hello world");
//  })
//     .then((result) => {
//         console.log("data2 resolved");
//         console.log("result of promise: ", result);
//         return savetoDb("Abhishek singh");
//     })
//       .then((result) => {
//         console.log("data3 resolved");
//         console.log("result of promise", result);
//       })
//     .catch((error) => {
//         console.log("some promise are reject");
//         console.log("error of promise");
//         console.log(error);
//     });
