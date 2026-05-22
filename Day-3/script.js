/*
// Arrays
let arr = [10, 412.123, "hello", true]
console.log(arr)

// Adds element to the last.
arr. push(30)
// Removes last element in array.
arr.pop()
console.log(arr)

// Insert element at start in array.
arr.unshift(90)
console.log(arr)
// Removes first element in array.
arr.shift(10)
console.log(arr)
*/

// Objects in JSON format - JavaScript Object Notation.
// let obj = {
//     id:1,
//     name: "Sasi",
//     age: 22,
//     salary: 48000,
//     techStack: ["Python", "HTML", "CSS"]
// }
// console.log(obj.techStack[0]);

/*
let data = [ 
    {
    id:1,
    name: "Sasi",
    age: 22,
    salary: 48000,
    techStack: ["Python", "HTML", "CSS"]
    },
    {
        id:2,
        name: "Praveen",
        age: 24,
        salary: 60000,
        techStack: ["Python", "SQL", "powerbi"]
    },
    {
        id: 3,
        name: "Hema",
        age: 22,
        salary: 35000,
        techStack: ["Python", "HTML", "CSS"]

    }
]
console.log(data);
*/

//1. Create an array of 5 student names and print them using a for loop.
/*
let students = [
    {
        std_id:204,
        name: "Mounika",
        branch:"EEE",
        marks:90
    },
    {
        std_id:205,
        name:"Sudarshan",
        branch:"EEE",
        marks:80
    },
    {
        std_id:206,
        name:"Prakash",
        branch:"EEE",
        marks:85
    },
    {
        std_id:210,
        name: "Dhanush",
        branch:"EEE",
        marks:79
    },
    {
        std_id:211,
        name:"Sasi",
        branch:"EEE",
        marks:90
    },
    {
        std_id:212,
        name:"Sai",
        branch: "EEE",
        marks:70
    }
]
let data=["Mounika", "Sudarshan", "Prakash", "Dhanush", "Sasi", "Sai"];
data.push("Reena");
data.pop()
for (let i=0; i<data.length; i++){
    if (data[i] === "Prakash"){
        data.splice(i,1);
        i--;
        continue;
    }
console.log(data[i]);
}
*/

// 2.Create an object for a mobile phone with properties:
// brand
// model
// price
// Print all values in the console.
/*
let mobile = {
    brand: "Apple",
    model: "iphone 17 pro",
    price: 120000,
}
console.log(mobile.brand);
console.log(mobile.model);
console.log(mobile.price);
*/

// 3.Write a program using switch statement to display the day of the week.
let day = 6;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day")
}



