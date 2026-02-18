// Variables in Javascript

var fullName = "Sakshyam Tamrakar";
var address = "Kathmandu, Nepal";
const bloodGroup = "A+";

console.log(fullName);
console.log(address);
console.log(bloodGroup);

// Data Types

let name = "Sakshyam";
let age = "20";
let student = true;
let hobbies = ["coding", "gaming", "traveling"];

let user = {
  name: "Sakshyam",
  age: "20",
  isstudent: true,
  hobbies: ["coding", "gaming", "traveling"],
};

console.log(hobbies[1]);

console.log(user['name']);
console.log(user.age);

//Functions

function greet(name){
  console.log("Hello " , name);
}

greet('Sakshyam');

//DOM Manipulation

const headingElementById = document.getElementById('heading-2');
console.log(headingElementById);
const headingElementByQuery = document.querySelector("#heading-2");

const paragraphElement =document.querySelector('.para');
paragraphElement.textContent = "This is updated paragraph.";
paragraphElement.style.color = "skyblue";

const buttonElement =document.querySelector('.btn');
buttonElement.textContent = "Click me!";
buttonElement.style.color = "purple";

buttonElement.addEventListener("click", function(){
    alert("Button clicked!");
    console.log("Button clicked!");
})