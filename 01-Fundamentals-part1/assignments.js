const country = "India";
const continent = "Asia";
let population = 1425;

console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
const language = "Hindi";
console.log(isIsland);
console.log(language);

const halfPopulation = population / 2;
console.log(halfPopulation);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description);

//template string
const description1 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description1);

//if/else statements
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is ${population} below average`);
}

//Type Conversion and Coercion
console.log("9" - "5"); //4
console.log("19" - "13" + "17"); //617
console.log("19" - "13" + 17); //23
console.log("123" < 57); //false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143

//Equality Operators: == vs. ===
// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );
// console.log(numNeighbours);

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// Logical Operators
if (language === "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

//Switch statement
switch (language) {
  case "Hindi":
    console.log("Number 4");
    break;
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

//Conditional (Ternary) Operator

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
