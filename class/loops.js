// while loop
// first example

// let i = 0;
// console.log("While loop started");
// while (i < 5) {
//     console.log(i);
//     i++;
// }
// console.log("While loop ended");

// ---------------------------------

// // second example

// console.log("While loop started");
// let i = 5;
// while (i) {
//     console.log(i);
//     i--;
// }
// console.log("While loop ended");

// --------------------------------------

// // do-while loop
// // first example

// let j = 0;
// do {
//     console.log(j);
//     j += 1; //j++;
// } while (j < 5);

// --------------------------------------

// // second example

// let j = 6;
// do {
//     console.log(j);
//     j += 1; j++;
// } while (j < 5);

// --------------------------------------

// // For loop
// // first example

// for (var j = 0; j < 10; j++) {
//     console.log(j);
// }

// console.log(j, "Global");

// --------------------------------------

// second example

// let i;
// console.log("Loop started");
// for (i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log("Loop finished");

// console.log(i);

// --------------------------------------

// //Breaking the loop
// // Break
// // first example
// let value;

// while (true) {
//     value = prompt("Enter your name", "");

//     if (value) break; // (*)
// }
// alert("Your name is: " + value);

// --------------------------------------

// //second example

// for (let i = 0; i < 10; i++) {
//     if (i > 6) break;
//     console.log(i);
// }

// --------------------------------------

// // Continue

// for (let i = 0; i < 10; i++) {
//     if (i == 5) continue;
//     console.log(i);
// }

// --------------------------------------

// // For in Loop

// let user = {
//     name: "Luka",
//     age: "40",
// };

// for (const key in user) {
//     console.log(key, " | ", user[key]);
// }

// --------------------------------------

// // For of Loop

// let fruits = ["Apple", "Orange", "Plum"];

// for (let fruit of fruits) {
//     console.log(fruit);
// }
