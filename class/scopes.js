// = მნიშვნელობის მინიჭება
// == რომელიც ადარებს მონაცემთა ტიპებით და თუ ეს მონაცემთ ტიპები არ ემთხვევა ცდილობს გადაიყვანოს ერთმანეთის ტიპებშ
//=== ადარებს როგორც მონაცემთა ტიპებს ასევე მათ მნიშვნელობებს და არ ცდილობს ერთმანეთის მონაცემთა ტიპებად გადაიყვანოს

// console.log( "2" == "2"); //true
// console.log(2 === "2"); // false
//----------- //

// if (2 === "2") {
//     console.log("1");
// } else if (3 === "3") {
//     console.log("2");
// } else {
//     console.log("3");
// }

// if (true) console.log(true); // ერთ ხაზეე შეიძლება დავწეროთ !!!

// let animal = 123; //true

// switch (animal) {
//     case "cat":
//         console.log("cat");
//         break;
//     case "dog":
//         console.log("dog");
//         break;
//     default:
//         console.log("no");
//         break;
// }

// let myPrompt = prompt("What`s your favorite fruit?");

// switch (myPrompt) {
//     case "apple":
//         console.log(`I love ${myPrompt}`);
//         break;
//     case "kiwi":
//         console.log(`I love kiwi ${myPrompt}`);
//         break;
//     case "peach":
//         console.log(`I love peach ${myPrompt}`);
//         break;
//     default:
//         console.log("Oops !!");
//         break;
// }

// let firstPersPrompt = prompt("What`s your name?");
// let secondPersPrompt = prompt("What`s your name?");

// let isUsersTrue = firstPersPrompt === secondPersPrompt;

// isUsersTrue
//     ? console.log("ერთი და იგივე მომხმარებელი")
//     : console.log("განსხვავებული მომხმარებლები");

// animal == "123" ? console.log("hey") : console.log("No");

// Scopes

// function Hi() {
//   let myvar = "Random Data";
//   console.log(myvar);
// }
// Hi();
// console.log(myvar);

// -----------------------------

// function myFunc() {
//   if (true) {
//     var name = "John";
//     let surname = "Doe";
//   }
//   console.log(name);
//   console.log(surname);
// }

// myFunc();

// ---------------------------

// {
//     var name = "John";
//     let surname = "Doe";
//   }

//   console.log(name);
//   console.log(surname);

// ---------------------------

//Closure

// let myvar = "Random Data";
// function Hi() {
//   console.log(myvar);
// }
// Hi();
// console.log(myvar);

// -----------------------------

// Redeclare

// var name = "John";
// var name = "Nick";

// let surname = "Doe";
// let surname = "Smith";

// console.log(name);
// ---------------------------
