console.log("HELLO ES6");

// Template Strings / Literals //

let name = "nageswararao";
let message = `Hello ${name},
My name is ${name.toLowerCase()}`;
console.log(message);

// Arrow Functions //

// Using map Method //
const twodArray = [1, 2, 3, 4].map(num => num * 2);
console.log(twodArray);


//Using Filter Method //

let numbers = [10, 20, 30, 40];
let total = numbers.filter(item => item * 2 == 0);
console.log(total);

// Using Arrow Functions and this // 

let person = {
  this: name1 = "Nageswar",
  this: age = 22
}
console.log(this.name1);

const pets = {
  pet: "Dog",
  animal() {
    setTimeout(() => { `${this.pet}` }, 1000);
    console.log(animal);

  }
}

// Destructuring // 
let foo = ['one', 'two', 'three', 'four'];

let [red, yellow, green, orange] = foo;

console.log(red);

// Spread // 

let number = [1, 3, 5, 7, 9];
let min = Math.min(...numbers);
console.log(min);


// Rest  //  

function rest(...args) {
  let result = 1;
  args.forEach(function (arg) {
    result *= arg;
  });
  return result;
}
console.log(rest(5));

// Default Arguments -1 //


function sayHello(greeting = "Hello", name = "CampJS") {
  console.log(`${greeting} ${name}!`);
}
sayHello();

// Default Argumets -2 //

function log(arg, transform = x => x) {

  console.log(transform(arg));
}
log('Hello', y => y.toUpperCase());
log('Hellooo', x => x.toLowerCase());
log('Hay Assemonk');

var username = "dominic";
var comment = " <b>domenic says</b>: &lt;dl&gt; is a fun tag";
var quote = `<b>${username}.says</b>:&lt;dl&gt; is a fun tag";`


console.log(quote);