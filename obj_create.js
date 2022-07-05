var person = {
  firstname: 'Default',
  lastname: 'Default',
  greet: function() {
    return `Hi ${this.firstname}`;
  }
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log('John: ', john);
console.log('Person: ', person);

