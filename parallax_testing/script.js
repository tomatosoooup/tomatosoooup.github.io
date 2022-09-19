// A variable - is a container for storing data
// Behaves as if it is was the value that it contains

// let age = 19;
// let firstName = "Vasyl";
// let student = true;

// document.getElementById("p1").innerHTML = "Hello " + firstName;
// document.getElementById("p2").innerHTML = "You are " + age + " years old";
// document.getElementById("p3").innerHTML = "Enrolled: " + student;

// Operands (values, variables, etc)
// Operators (+, -, *, /, %)

// let students = 20;
// students = students + 2;
// students = students - 2;
// students = students * 2;
// students = students / 2;

// let extraStudents = students % 3;

// How to accept user input

// let username = window.prompt("What's your name ?: ");
// alert(username);

// document.getElementById("myButton").onclick = function () {
//   username = document.getElementById("myText").value;
//   alert(username);
//   document.getElementById("myLabel").innerHTML = "Name accepted";
// };

// Type Conversion = change the datatype of a value to another
//                      (string, numbers, booleans)

// let age = window.prompt(`What's your age ?: `);
// age = Number(age);
// age += 1;
// Has to be 211 because of different datatypes
// But I've changed it's datatype by using Number class
// alert("Happy Birthday! You are", age, "years old");

// let x, y, z;

// x = Number("3.14");
// y = String(3.14);
// z = Boolean("");

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// const = a variable that can't be changed

// constant
// let PI = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);

// PI = 420.69;

// circumference = 2 * PI * radius;
// alert(circumference);

// Math

// let x = 3.14;
// let y = 5;
// let z = 9;
// let maximum, minimun;
// x = Math.ceil(x);
// x = Math.floor(x);
// x = Math.pow(x, 2);
// x = Math.sqrt(x);
// x = Math.abs(x);
// alert(x);

// maximum = Math.max(x, z);
// minimun = Math.min(y, z);

// let count = 0;

// document.getElementById("button1").onclick = function () {
//   count -= 1;
//   document.getElementById("countLabel").innerHTML = count;
// };

// document.getElementById("button2").onclick = function () {
//   count = 0;
//   document.getElementById("countLabel").innerHTML = count;
// };

// document.getElementById("button3").onclick = function () {
//   count += 1;
//   document.getElementById("countLabel").innerHTML = count;
// };

//random method
// x = Math.floor(Math.random() * 6);
// between 0 and 5
// alert(x);

let header = document.getElementById("header");
let stars = document.getElementById("stars");
let mountain = document.getElementById("mountain");
let clouds = document.getElementById("clouds");
let canvas_one = document.getElementById("canvas_one");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  header.style.top = value * 0.4 + "px";
  clouds.style.top = value * 0.4 + "px";
  mountain.style.top = value * 0.3 + "px";
  canvas_one.style.top = value + "px";
});

$(".sec, .section").on("click", "a", function (event) {
  event.preventDefault();
  let id = $(this).attr("href");
  let top = $(id).offset().top;
  $("body,html").animate({ scrollTop: top }, 1500);
});

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let users = [];

function addUser() {
  let user_name = document.getElementById("input_name").value.trim();
  let user_age = document.getElementById("input_age").value.trim();
  let total_name = document.getElementById("total_name");
  let average_age = document.getElementById("average_age");

  if (user_name && user_age) {
    users.push(new User(`${user_name}`, user_age));

    let information = document.querySelector(".information");

    information.innerHTML =
      information.innerHTML +
      `<label>${users[users.length - 1].name} | ${
        users[users.length - 1].age
      }</label>`;

    total_name.innerHTML = users.length;
    total = 0;
    users.forEach((user) => {
      total += Number(user.age);
      average_age.innerHTML = Math.floor(total / users.length);
    });
  }

  localStorage.setItem("testObject", JSON.stringify(users));

  let getObjects = localStorage.getItem("testObject");
}
