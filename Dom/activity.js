let btn = document.querySelector("button");


btn.addEventListener("click", function() {
    let h3 = document.querySelector("h3");
    let randomcolor = getRandomcolor();
    h3.innerText = randomcolor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomcolor;
    // console.log("generate random color ");
    console.log("color updated");
});

function getRandomcolor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}



     //othres next lesson
 let p = document.querySelector("p");
 p.addEventListener("click", function() {
    console.log("para was clicked");
 });
 
 let box = document.querySelector(".box");
 box.addEventListener("mouseenter", function() {
    console.log("mouse inside div");
 })
 let h2 = document.querySelector("h2");
 let h4 = document.querySelector("h4");
 let h5 = document.querySelector("h5");

 function changeColor() {
    console.log(this.innerText);
    this.style.backgroundColor = "green";
 }
 h2.addEventListener("click", changeColor);
 p.addEventListener("click", changeColor);
 h4.addEventListener("click", changeColor);
 h5.addEventListener("click", changeColor);


