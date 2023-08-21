async function greet() {        //topic async function
    throw "404 page was not found!";
    return "Hello!";
}
 greet() 
 .then((result) => {
    console.log("promises was successful");
    console.log("result was : ", result);
 })
 .catch((err) => {
    console.log("promises was resolved with err : ", err);
    
 });

 let demo = async () => {
    return 5;
 };


 //await keyword
 console.log("eample of await function");

 function getNum() {
    return new Promise ((resolve, reject) => {
       setTimeout(() => {
        let num = Math.floor(Math.random()*10)+1;
        console.log(num);
        resolve();
       }, 1000);
    })
 }

 async function demo1() {
    await getNum();
   await getNum();
   await getNum();
  await  getNum();
   await getNum();
   await getNum();
 }  

 //await fxn use in color change fxn

 h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
     setTimeout(() => {
        let num = Math.floor(Math.random()*10)+ 1;
        if(num > 5 ) {
            reject("promise rejected")
        }
    h1.style.color = color;
   console.log(`color changed to ${color}!`);
   resolve("color changed!");
}, delay);   
    });
}

async function colorchanger() {
    try {                                 //error handling started!
        await changeColor ("red", 1000);
    await changeColor ("orange", 1000);
    await changeColor ("pink", 1000);
    await changeColor ("blue", 1000);
    await changeColor ("yellow", 1000);
    await changeColor ("grey", 1000);
    await changeColor ("white", 1000);
    await changeColor ("voilet", 1000);
    await changeColor ("indigo", 1000);
     await changeColor ("green", 1000); 
    } catch(err) {
        console.log("error caught");
        console.log(err);
    }
    
     let a =8;
     console.log(a);
     console.log(" ", a + 2);
}