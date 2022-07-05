// Function Constructors:
// A normal function that is used to construct objects.
// The 'this' variable points a new empty object, and that object
// is returned from the function automatically

function Person(firstname, lastname) {
  console.log('this: ', this);
  this.firstname = firstname;
  this.lastname = lastname;
  console.log('this: ', this);
}

// ---------------------------------------
// Setting Prototype

Person.prototype.test = 'ok';
Person.prototype.getFullName = function() {
  return `${this.firstname} ${this.lastname}`;
};

var john = new Person('John', 'Doe');
console.log(john);
console.log(john.getFullName());

var jane = new Person('Jane', 'Doe');
console.log(jane);
console.log(jane.getFullName());

var paul = {
  firstname: 'Paul',
  lastname: 'Doe'
};

console.log(jane.getFullName.call(paul));

Person.prototype.getFormalName = function() {
  return `${this.lastname}, ${this.firstname}`;
};

console.log(john.getFormalName());