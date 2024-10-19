/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

let firstName = "renuka";
console.log(firstName);

let PI = 3.1415;

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "renuka");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

//undefined
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null); //bug


let age = 30;
age = 31; // mutable

const birthYear = 1991;
// birthYear = 1990; // can't reassign or immutable

// const job; // missing initializer

var job = "programmer";
job = "teacher";

lastName = "chichkote";
console.log(lastName);


//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 2, 2 ** 3); //2 ** 3 means 2to the power of 3 = 2*2*2=8

//concate strings
const firstName = "renuka";
const lastName = "chichkote";
console.log(firstName + " " + lastName);

//Assignment operators
let x = 10 + 5; //15
x += 10; // x = x+10;
x *= 4; // x=x*4
x++; // x=x+1
x--; //x=x-1
console.log(x);

//comparison operators
console.log(ageJonas > ageSarah); // <, >, <=, >=

console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


//operator precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(now - 1991 > now - 2018); //math operator has higher precedence than comparator operator

console.log(20 - 10 - 5); //left to right

let x, y;
x = y = 20 - 10 - 5; // x = y = 10, x=10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


//Strings and template literals
const firstName = "Renuka";
const job = "developer";
const birthYear = 1997;
const year = 2023;

const renuka =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(renuka);

const newRenuka = `I'm ${firstName}, a ${year - birthYear} year old ${job}! `;
console.log(newRenuka);

console.log(`Just a regular string...`);

//template string to create multi line strings
console.log(
  "String with \n\
multi \n\
lines"
);

console.log(`String
with multi
lines`);


//if else statements

const age = 18;
if (age >= 18) {
  console.log(`Sarah can start driving licence.`);
} else {
  const yearsLeft = age - 18;
  console.log(`Sarah is too young. Wait another ${yearsLeft} year.`);
}

const birthYear = 1997;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


//type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number("renuka"));
console.log(typeof NaN);

console.log(String(23));

//type coercion
console.log("I am " + 23 + " years old"); // number to string
console.log("23" - "10" - 3); // number to string
console.log("23" * "4"); //number to string
console.log("23" / "2"); //number to string

console.log("23" + "10" + 3); // 23103 string concatenation

let n = "1" + 1; //11
n = n - 1; //10
console.log(n); //10


//Truthy and falsy values

//5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 1000;
if (money) {
  console.log("Don't spend it all :)");
} else {
  console.log("You should get a job!");
}

let height = 0; // in this case it is undefined, we can fix this using logical operators.
if (height) {
  console.log("YAY! Height is defined.");
} else {
  console.log("Height is UNDEFINED.");
}


//Equality operators: == vs. ===
// == -> converts type conversions
const age = 18;
if (age === 18) console.log("You just became adult :D (strict)");
if (age == 18) console.log("You just became adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is a amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number!");
} else if (favourite === 9) {
  console.log("9 is also a cool number!");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("why not 23?");


//Boolen logic: AND, OR, NOT
//logical operators
const hasDriverLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; //C
if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive...");
}


//Switch statement
const day = "monday";

switch (day) {
  case "monday": //day === monday
    console.log("Plan course structure.");
    break;
  case "tuesday":
    console.log("Write code examples.");
    break;
  case "wednesday":
  case "thursday":
    console.log("prepare theory videos.");
    break;
  case "friday":
    console.log("Record videos.");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy weekend.");
    break;
  default:
    console.log("Not a valid day.");
}

if (day === "monday") {
  console.log("Plan course structure.");
} else if (day === "tuesday") {
  console.log("Write code examples.");
} else if (day === "wednesday" || day === "thursday") {
  console.log("prepare theory videos.");
} else if (day === "friday") {
  console.log("Record videos.");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy weekend.");
} else {
  console.log("Not a valid day.");
}
*/

//Condition or ternary operator
const age = 23;
// age >= 18
//   ? console.log("I like to drink wine.")
//   : console.log("I like to drink water.");

const drink = age >= 18 ? "Wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);
