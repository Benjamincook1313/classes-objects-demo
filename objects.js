
const person = {
    first: "Benjamin",
    last: "Cook",
    age: 30
};

// dot notation
// console.log(person.first);

// bracket notation
// console.log(person['last']);

const meal = {
    appetizer: "chips & salsa",
    entree: "carne asada burrito",
    dessert: "tres leches",
    drink: "horchata"
};

const meal2 = {
    appetizer: "ceviche",
    entree: "loaded nachos",
    dessert: "fried ice cream",
    drink: "cerveza"
};

let  { drink, appetizer, dessert, entree } = meal;

console.log(entree + " with " + drink);

let newFav = "Dr. P";

meal.drink = newFav;

// rename and destructure
const { drink: drink2, appetizer: app2, dessert: des2, entree: delicious} = meal2;


// loop over meal2 
// if the key dessert update the value to be churros and print to console else print the value

for(let key in meal2){
    if(key === "dessert"){
        meal2[key] = "churros";
        console.log(meal2[key]);
    }else{
        console.log(key);
    }
}

let teams = {
    teamOne: ['ryan', 'alex', 'wyatt', 'tj'],
    teamTwo: ['henry', 'cole', 'charlie', 'zeke'],
    teamThree: ['porter', 'blake', 'june', 'owen'],
    teamFour: ['brian', 'riley', 'ezra', 'jordan'],
    teamFive: ['grey', 'milo', 'mckay', 'leo']
  };

  teams.teamSix = ["Jared", "Kyle", "Bob", "Jordan"];

  delete teams.teamFour;

  console.log(teams);