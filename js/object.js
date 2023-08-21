const student = {
name : "Abhishek",
age : 20,
marks : 71.5,
city : "satna"
};

const delhi = {
    latitude : 28.4712,
    logitude : 77.2854
};

const item = {
    price : 60000,
    discount : 20,
    itemName : "laptop",
    color : ["black", "white"],
};
// create a post for twitter and instagram
const post = {
    userName : "@abhishek74401",
    content : "this is my #firstpost",
    likes : 160,
    repost : 10,
    tags : ["@singhboy","@rohansharma", "Ajeetprasad"]
};

// same example in array
let students = ["Abhishek", 20, 71.5, "satna"];


// get values
const obj = {
    1: "a",
    2: "b",
    3: "c",
    true: "d",
    null: "e",
    undefined: "f"
};

// add and update values (student.gender = "male";)
// delete obj. keyname;

// nested object
const classInfo = {
    Abhishek : {
        grade : "A+",
        city : "Bhopal"
    },
    Dhruv : {
        grade : "A",
        City : "Mathura"
    },
    Atul : {
        grade : "B",
        city : "Mumbai"
    }
};

// array of object
const studentInfo = [
    {
        name: "ram",
        branch: "cse",
        rollno: "0127cs221002" 
    },
    {
        name: "Manyak",
        branch: "cse",
        rollno : "0127cs1042"
    },
    {
        name : "rachna",
        branch: "cse",
        rollno: "0127cs1141"
    }
]

// pratice QS 
// 01. generate upto 100
let random = Math.floor(Math.random()*100+1);

// 02. onlt 1 to 5
Math.floor(Math.random()*5+1);

//03. only b/w 20 to 25
Math.floor(Math.random()*5+20);
