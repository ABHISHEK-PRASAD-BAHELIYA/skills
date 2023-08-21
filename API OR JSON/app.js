let jsonRes = 
'{"fact":"There are more than 500 million domestic cats in the world, with approximately 40 recognized breeds.","length":100}';

let vaildRes = JSON.parse(jsonRes);
console.log(vaildRes.fact);

let student = {
    name: "Abhishek Prasad",
    age: 20,
    marks: 95
}





//our first Api request
let url = "https://catfact.ninja/fact";

async function getFacts() {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
}










// fetch(url)
//    .then((res) => {
//     console.log(res);
//    return res.json();            
//     })
//     .then((data) => {
//     console.log("data1 = ", data.fact);
//    return fetch(url);
//    })
//    .then((res) => {
//     return res.json();
//    })
//    .then((data2) => {
//     console.log("data2 = ", data2.fact);
//    })
//    .catch((err) => {
//     console.log("ERROR - ", err);
//    }); 
