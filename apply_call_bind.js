// JS Function are objects
// Function has a non required attribute Name (Function can be anonimous)
// Function has a executabel attribute called Code
// Function objects has three built-in methods
// call(), apply() and bind()

var person = {
  firstname: 'John',
  lastname: 'Doe',
  getFullName: function() {
    var fullname = `${this.firstname} ${this.lastname}`;
    return fullname;
  }
}

// console.log(person.getFullName());

var logName = function(arg1, arg2) {
  console.log(`Logged ${this.getFullName()}`);
}

// logName();

// bind sets what the variable this is
// don't executes the function
var logPersonName = logName.bind(person);

// logPersonName();

// call executes the function, allow us to pass what the this variable is 
// and let us pass parameters at same time
logName.call(person, 'arg1', 'arg2');

// apply it's similar to call function but with one difference
// applay recevies two parameters
// what's the this variable and an array of args 
logName.apply(person, ['arg1', 'arg2']);

// function borrowing
var person2 = {
  firstname: 'Jane',
  lastname: 'Doe'
}

console.log(person.getFullName.apply(person2));

// Function Currying =>
// Creating a copy of a function but with some preset parameters
// e.g.
const multiply = (a, b) => {
  return a*b;
}

// this will create copy of multiply function, but with a preset value 
var multipleByTwo = multiply.bind(this, 2);
// some thing like in the next comment will be created.

// simulation of a function create using code above:
// var multipleByTwo = function(b) {
//   var a = 2;
//   return 2*b
// }

console.log(multipleByTwo(3));

console.log((function() {return this})());
console.log((() => this)());
var test = {
  name: 'test',
  test: function() {
    return this
  } 
}
console.log(test.test())
var test2 = {
  name: 'test2',
  test: () => this
}
console.log(test2.test())