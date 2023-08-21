//Foreach
let arr = [1, 2, 3, 4, 5];

let print = function (el) {
    console.log(el);
};

arr.forEach(print);
         //or
console.log("or");

   arr.forEach(function (el) {
   console.log(el);
   });      



   let array = [{
    name : "Abhishek",
    marks : 94
   },
    {
        name : "vikash",
        marks : 96
    }, {
        name : "gaurav mishra",
        marks : 85
    }];

    array.forEach((student) => {
        console.log(student.marks);
    });

    //map
let num = [1, 2, 3, 4];

let double = num.map((el) => {
    return el * el;
});

//filter
let nums = [1, 4, 7, 2, 3, 5, 6, 8, 9];

//let even = nums.filter( (num) => (num % 2 == 0)); //even -> true, odd -> false

let ans = nums.filter((el) =>{
    return el % 2 !=0;
});


//every (similar to AND operator)
let a = [2, 4, 6].every((el) => el%2 ==0);
let b = [1, 2, 4].every((el) => el%2 ==0);
let c = [1, 3, 5].every((el) => el%2 !=0);

//SOME fn (similar to OR)
 let d = [1, 2, 3, 4].some( (el) => (el%2 == 0));
let e = [1, 3].some( (el) => (el%2 == 0));

//REDUCE FN (take previous result value )

let x = [1, 2, 3, 4];
let finalAns = x.reduce((res, el) => res +el );
// {
//     console.log(res);
//     return res +el ;
    
// }

console.log(finalAns);

// ans = 10; use calc sum all arr values


//maximum in array
let number = [1, 2, 3, 7, 8, 5, 25, 4];

// let max = -1;
// for(i=0; i<number.length; i++) {
//     if (max < number[i]) {
//         max = number[i];
//     }
// }

// console.log(max); //ans = 8

       //or (another method)
let max = number.reduce((max, el) => {
    if (max < el) {
        return el;
    } else {
        return max;
    }
});

console.log(max);



// practiceQS 01 (all no. are multiple of 10)
let no = [10, 20, 30, 40, 5, 50]; 

let answer = no.every((el) => el%10 == 0);

console.log(answer);

//QS 02
let min = no.reduce((min, el) => {
    if (min > el) {
        return el;
    } else {
        return min;
    }
});

console.log(min);
// this code converts into function
function getMin(no) {
    let min = no.reduce((min, el) => {
        if (min < el) {
            return min;
        } else {
            return el;
        }
    });

    return min;
}

//Dafault parameter
function sum (a, b=3) {
    return a + b;
}


//spread
let name = "Bandsal college of engineering";
let Arr = [1, 5, 9, 7, 5, 3, 2, 4, 8, 6];
console.log(...name);
console.log(...Arr);
//spread (array laterials)
let Array = [7, 0, 1, 7, 9, 0, 3, 5, 2, 4];
let newArray = [...Array];
newArray.push(4, 0, 8, 5)
console.log(newArray);

let char = [..."Remu sharma"];
console.log(char);


let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];
console.log(...even, ...odd);

//spread object
const data = {
email: "sighabhishek74401@gmail.com",
passward: "abcde",
};
let datacopy = {...data, id: 1234, country: "india"};

let p = [9, 5, 6, 8, 8, 7, 7, 4, 1, 8]; //val
let obj1 = {...p}; //obj -> key:val
let obj2 = {..."Happy"};

//rest 
function sum(...args) {
    return args.reduc((sum, el) => sum + el);
}

//make copy of math min
function minimum(msg,...args) {
    console.log(msg);
    return args.reduce((minimum, el) => {
        if (minimum > el) {
            return el;
        } else {
            return minimum;
        }
    });
}

// destructing (use in aaray)
let names = ["tony", "bruce", "strev", "peter", "rohan", "mayank"];
//let winner = names[0];
//let runnerup = names[1];
//let secondRunnerup = names[2];

let [winner, runnerup, secondRunnerup, ...other] = names;
console.log(winner, runnerup); //"tony" "bruce"


//destructing (use in objects)
const student = {
    name: "Ajeet Prasad Baheliya",
    age: 17,
    class: 12,
    subjects: ["hindi", "english", "science", "computer", "maths"],
    username: "Ajeet@123",
    passward: 9927776548,
};
//let username = student.username;
//let passward = student.passward;

const {username: user, passward: pass, city:place = "Bhopal" } = student;
console.log(user); //"Ajeet@123"