// _Notes form today's lecture_


// rule #1
// * Window Binding - if none of the other rules apply "this" defaults to the window object - unless you are in a strict mode in which case it returns undefined
// * Strict mode - prevents window binding from breaking our code but it sill return undefined

// ex 

// 'use strict';
// function ghost(){
//     console.log(this.boo);
// }

// const boo = '👻';

// ghost();

// rule #2
// implicit binding (automatically refers to what ever is to the left of the dot)
// most common rule - found in 80% of use cases
// when the function is invoked, look to the left of the dot  that's what 'this' refers to 
// only applies to object with methods

// let myGhost = {
//     name: 'Casper',
//     boo: '👻 boooooo!',
//     ghost: function(){
//         console.log(ths.boo);
//     }
// }

// myGhost.ghost(); // invoking the function - look to the left of the dot - that's what "this" refers to 

// const petOne = {
//     name: 'Ada',
//     species: 'Bali Dog',
//     pronoun: 'she',
//     favFood: 'salmon',
//     eat: function(){
//         console.log(`${this.name} is a ${this.species} and ${this.pronoun} likes to eat ${this.favFood}`);
//     }
// }

// const petTwo = {
//     name: 'Chi chi',
//     species: 'Shiba inu',
//     pronoun: 'she',
//     favFood: 'salmon',
//     eat: function(){
//         console.log(`${this.name} is a ${this.species} and ${this.pronoun} likes to eat ${this.favFood}`);
//     }
// }

// const petThree = {
//     name: 'BooBoo',
//     species: 'Pembroke Welsh Corgi',
//     pronoun: 'he',
//     favFood: 'anything really',
//     eat: function(){
//         console.log(`${this.name} is a ${this.species} and ${this.pronoun} likes to eat ${this.favFood}`);
//     }
// }

// const petFour = {
//     name: 'Auggie',
//     species: 'Pembroke Welsh Corgi',
//     pronoun: 'he',
//     favFood: 'meat',
//     eat: function(){
//         console.log(`${this.name} is a ${this.species} and ${this.pronoun} likes to eat ${this.favFood}`);
//     }
// }

// petOne.eat();
// petTwo.eat();
// petThree.eat();
// petFour.eat();

// const person = {
//     name: 'Sean',
//     location: 'Alexandira, VA',
//     age: 29,
//     greet: function(){
//         console.log(`Hi, I am ${this.name}, I'm from ${this.location} and I am ${this.age} years old!`)
//     }
// }

// person.greet();

// rule #3
// Explicit Binding
// 1 --> Call - will immediately invoke the function
    // .call passes in arguments one by one
// 2 --> Apply - will immediately invoke the function
    // .apply pass arguments in as an array
// 3 --> Bind - you pass arguments in one by one but it does not immediately invoke the function. It returns a brand new function that can be invoked later
// all of the above allow us to explicity state what the 'this' keyword is referring to 

// call 
// function ghost(){
//     console.log(this.boo);
// }

// let myGhost = {
//     name: 'Casper',
//     boo: '👻 boooo!'
// }

// let otherGhost = {
//     name: 'Fatso',
//     boo: '😡👻 boo!'
// }

// ghost.call(myGhost); // invoking function, to see Casper's boo
// ghost.call(otherGhost); // invoking function, to see Fatso's boo

// const friendlyGhost = ghost.bind(myGhost);

// friendlyGhost();

// // quokka practice

// const name = {
//     name: 'Sean',
//     age: 29,
// }

// console.log(name.name) // Sean
// console.log(name.age) // 29

// function callOfTheWild(){
//     console.log(`${this.name} says ${this.sound}`);
// }

// const animal = {
//     name: 'Noa',
//     species: 'Bali Dog',
//     sound: 'bark bark'
// }

// callOfTheWild.call(animal);

// function Ghost(saying){
//     this.phrase = saying;
// }

// let myGhost = new Ghost('Casper the friendly 👻');

// console.log(myGhost.phrase); // function is being invoked 

// function Food(favorite){
//     this.dish = favorite;
// }

// let myFood = new Food('Latin cooking');

// console.log(myFood.dish);

// Britt's example
// function Food(favorite) {
//     this.food = favorite;
// }

// let myFavoriteFood = new Food('Ethiopian');

// console.log(`My favorite food is ${myFavoriteFood.food}`); 


// another quokka test - doesn't work with symbols, rather words. 
// let money = 100;

// console.log(money); 

// Prototypes + Constructor Functions
// constructor function can construct new object - that's it's whole purpose 
// A few key differences 
// this
// missing a return 
// Capitalized function name



// const petOne = {
//     name: 'Ada',
//     species: 'Bali Dog',
//     pronoun: 'she',
//     favFood:'Salmon',
//     eat: function(){
//         console.log(`${this.name} is a ${this.species} and ${this.pronoun} likes to eat ${this.favFood}`);
//     }
// }

// const petTwo = {
//     name: 'Chi Chi',
//     species: 'Shiba Inu',
//     pronoun: 'she',
//     favFood:'Salmon',
//     eat: function(){
//         console.log(`${this.name} is a ${this.species} and ${this.pronoun} likes to eat ${this.favFood}`);
//     }
// }

// const petThree = {
//     name: 'Mushu',
//     species: 'cat',
//     pronoun: 'she',
//     favFood:'chicken',
//     eat: function(){
//         console.log(`${this.name} is a ${this.species} and ${this.pronoun} likes to eat ${this.favFood}`);
//     }
// }

// const petFour = {
//     name: 'Snow',
//     species: 'bunny',
//     pronoun: 'he',
//     favFood:'Cabbage',
//     eat: function(){
//         console.log(`${this.name} is a ${this.species} and ${this.pronoun} likes to eat ${this.favFood}`);
//     }
// }

function Pet(attributes){
    this.newName = attributes.name,
    this.newSpecies = attributes.species,
    this.newPronoun = attributes.pronoun,
    this.newFavFood = attributes.favFood,
    this.newPhrase = attributes.phrase,
    this.newToy = attributes.toy  
  }
  
  Pet.prototype.eat = function(){
    return `${this.newName} is a ${this.newSpecies} and ${this.newPronoun} likes to eat ${this.newFavFood}`;
  }
  Pet.prototype.speak = function(){
    return `${this.newName} says ${this.newPhrase}`;
  }
  Pet.prototype.play = function(){
    return `${this.newName} plays with ${this.newToy}`;
  }
  const petOne = new Pet({
    name: 'Ada',
    species: 'Bali Dog',
    pronoun: 'she',
    favFood:'Salmon',
    phrase: 'woof woof',
    toy: 'stuffed squrriel'
  });
  
  const petTwo = new Pet({
    name: 'Chi Chi',
    species: 'Shiba Inu',
    pronoun: 'she',
    favFood:'Salmon',
    phrase: 'bark bark',
    toy: 'stuffed bear',
  }); 
  
  const petThree = new Pet({
    name: 'Mushu',
    species: 'cat',
    pronoun: 'she',
    favFood:'chicken',
    phrase: 'mew mew',
    toy: 'toy mouse',
  });
    
  const petFour = new Pet({
    name: 'Snow',
    species: 'bunny',
    pronoun: 'he',
    favFood:'Cabbage',
    phrase: 'screech roar!',
    toy: 'wheel',
  }); 
  
  console.log(petOne.eat());
  console.log(petTwo.eat());
  console.log(petThree.eat());
  console.log(petFour.eat());
  console.log(petOne.speak());
  console.log(petTwo.speak());
  console.log(petThree.speak());
  console.log(petFour.speak());
  console.log(petOne.play());
  console.log(petTwo.play());
  console.log(petThree.play());
  console.log(petFour.play());
  
  // prototypical inheritence 
  // arrays can do everything functions can do and everything objects can do
  //functions can do everything objects can do 
  // everything in JavaScript is an object 
