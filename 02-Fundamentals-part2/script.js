"use strict";

/*
function logger() {
  console.log("My name is Renuka.");
}

logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2);

//Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstname) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstname} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, "jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));



//functioncalling other functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


//reviewing functions
const calAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstname) {
  const age = calAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstname} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstname} has already retired.`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Bob"));


//Arrays
const friend1 = "Micheal";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Micheal", "Steven", "Peter"];
console.log(friends);

console.log(friends[0]); //fetch first element
console.log(friends[1]); //fetch second element
console.log(friends.length); //length of the array
console.log(friends[friends.length - 1]); //last element of the array

friends[2] = "Jay";
console.log(friends);

//friends = ["Bob", "Alice"]; //this can't be done

const firstName = "Jonas";
const jonas = [firstName, "Schemadten", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

//Exercise

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1991, 1997, 1990, 2022, 2020, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);


//Array Methods
const friends = ["Micheal", "Steven", "Peter"];

//add at last
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

//add at first
friends.unshift("John");
console.log(friends);

//remove from last

friends.pop();
const popped = friends.pop();
console.log(friends);

//remove first
friends.shift();
console.log(friends);

//indexof
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

//includes => does strict equality
friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));


//Objects
const jonas = {
  firstName: "Jonas",
  lastName: "schemedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Micheal", "Steven", "peter"],
};

console.log(jonas);

console.log(jonas.firstName);
console.log(jonas["firstName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

//console.log(jonas.'last'+nameKey); using dot not possible

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age,job, and friends."
);
console.log(interestedIn);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "wrong request! Choose between firstName, lastName, age,job, and friends."
  );
}

jonas.location = "portugal";
jonas["twitter"] = "@jonasschemedtmann";

console.log(jonas);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);


//Object methods
const jonas = {
  firstName: "Jonas",
  lastName: "schemedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Micheal", "Steven", "peter"],
  hasDriverLicense: true,
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//Challenge
console.log(jonas.getSummary());


//for loop

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repetiotion ${rep}`);
}
*/

const jonas = [
  "Jonas",
  "schemedtmann",
  2037 - 1991,
  "teacher",
  ["Micheal", "Steven", "peter"],
];

const types = [];
for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  //filling types array
  //types[i] = typeof jonas[i];

  types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 1996, 2007, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

//continue and break
console.log("-------Only Strings---------");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log("-------Break with Numbers---------");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}
