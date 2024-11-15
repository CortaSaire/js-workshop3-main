// problem 1
// მომხმარებელს მოთხოვეთ რომ შეიყვანოს რიცხვი, თუ კენტ რიცხვს შეიყვანს კონსოლში დაბეჭდეთ
// რომ მომხმარებელმა შეიყვანა კენტი რიცხვი თუ ლუწს შეიყვანს მაშინ შესაბამისად კონსოლში დაბეჭდეთ
// რომ მომხარებელმა შეიყვანა ლუწი რიცხვი.
// (მომხმარებლისგან ინფორმაციის მისაღებად გამოიყენეთ prompt() ფუნქცია,)
// (კონსოლში დასაბეჭდათ გამოიყენეთ console.log() ფუნქცია )

/*
const number = parseInt(prompt("შეიყვანეთ რიცხვი 1 -დან 100 -ის ჩათვლით:"));

if (number >= 1 && number <= 100) {
  if (number % 2 === 0) {
    console.log("ლუწია.");
  } else {
    console.log("კენტია.");
  }
} else {
  console.log("შეიყვანეთ სწორი რიცხვი 1 -დან 100 -ის ჩათვლით.");
}
*/

// problem 2
// მომხმარებელს მოთხოვეთ რომ შეიყვანოს მისთვის საყვარელი ხილი
// ვაშლის შემთხვევაში კონსოლში დაბეჭდეთ რომ 'ვაშლი კარგი არჩევანია ! '
// მსხლის შემთხვევაში კონსოლში დაბეჭდეთ რომ 'მსხალი სჯობს! '
// ყურძნის შემთხვევაში კონსოლში დაბეჭდეთ რომ 'ყურძენი საუკეთესოა! '
// სურვილის შემთხვევაში დაამატეთ რამდენი ვარიანტიც გინდათ
// სხვა შემთხვევებში (თუ ისეთ ხილს შეიყვანს მომხმარებელი რომელიც ჩვენ არ გვიწერია ან ზოგადად ხილს არ შეიყვანს)
// კონსოლში დაბეჭდეთ "მოცემული მნიშვნელობა არ არის ჩვენს სიაში."
// დავალება შეასრულეთ Switch გამოყენებით

/*
const fruit = prompt("შეიყვანეთ თქვენი საყვარელი ხილი:");

switch (fruit) {
  case "ვაშლი":
    console.log("ვაშლი კარგი არჩევანია!");
    break;
  case "მსხალი":
    console.log("მსხალი სჯობს!");
    break;
  case "ყურძენი":
    console.log("ყურძენი საუკეთესოა!");
    break;
  case "ბანანი":
    console.log("ბანანი ძალიან გემრიელია!");
    break;
  case "ფორთოხალი":
    console.log("ფორთოხალი სავსეა ვიტამინებით!");
    break;
  default:
    console.log("მოცემული მნიშვნელობა არ არის ჩვენს სიაში.");
}
*/

// problem 3
// კონსოლში დაბეჭდეთ 1-100 მდე ყველა ლუწი რიცხვი (დაგჭირდება Loop)

/*
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
*/

// problem4
// მომხმარებელს მოთხოვეთ რომ შეიყვანოს რიცხვები მანამ სანამ არ შეიყვანს უარყოფით რიცხვს

/*
let number;

do {
    number = parseInt(prompt("გთხოვთ შეიყვანოთ რიცხვი:"));
} while (number >= 0);

console.log("შეყვანილია უარყოფითი რიცხვი.");
*/

// problems 5
// let numbers = [10,12,42,55,100,90,32,55];
// let result=[];
// numbers მასივში იპოვეთ რიცხვები რომელიც იყოფა 5-ზე ლუპის საშუალებით,
// შეინახეთ result მასივში.

/*
let numbers = [10, 12, 42, 55, 100, 90, 32, 55];
let result = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 5 === 0) {
        result.push(numbers[i]);
    }
}

console.log(result);
*/

// problem 6
// let names = ["Gio","Luka","Nika","Ani","Eka","Nini","Sopo"];
// კონსოლში დაბეჭდეთ names მასივში არსებული ყველა ელემენტი, გამოტოვეთ მხოლოდ ნიკა.
// ლუპის საშუალებით.

/*
let names = ["Gio", "Luka", "Nika", "Ani", "Eka", "Nini", "Sopo"];

for (let i = 0; i < names.length; i++) {
    if (names[i] === "Nika") {
        continue; 
    }
    console.log(names[i]);
}
*/

// problem7

// Loop-ს დახმარებით იპოვეთ და დააბრუნეთ  მასივში ყველაზე დიდ რიცხვს.

// const numbers = [
//   1, 4, 2, 14, 90, 13, 2, 0, 78, 199, 12, 313, 315, 789, 31, 12, 1, 1, 3467, 90,
//   70, 34, 43, 189,
// ];

/*
const numbers = [
  1, 4, 2, 14, 90, 13, 2, 0, 78, 199, 12, 313, 315, 789, 31, 12, 1, 1, 3467, 90,
  70, 34, 43, 189,
];

let max = numbers[0]; // Start with the first element as the initial maximum

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i]; 
    }
}

console.log("The largest number is:", max);
*/

// problem8

// Loop-ს დახმარებით იპოვეთ და დააბრუნეთ  მასივში ყველაზე პატარა რიცხვს.

// const numbers = [
//     1, 4, 2, 14, 90, 13, 2, 0, 78, 199, 12, 313, 315, 789, 31, 12, 1, 1, 3467, 90,
//     70, 34, 43, 189,
//   ];

// Have fun :) :)

/*
const numbers = [
    1, 4, 2, 14, 90, 13, 2, 0, 78, 199, 12, 313, 315, 789, 31, 12, 1, 1, 3467, 90,
    70, 34, 43, 189,
];

let min = numbers[0]; 

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i]; 
    }
}

console.log("The smallest number is:", min);
*/
