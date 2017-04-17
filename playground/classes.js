class Person {
  constructor(firstName = 'Anonymous', age = undefined) {
    this.name = firstName;
    this.age = age;
  }

  getGreeting() {
    return `Hello there, I'm ${this.name}!`;
  }

  getDescription() {
    switch (this.age) {
      case undefined: return `${this.name} is of unknown age.`;
      default: return `${this.name} is ${this.age} year(s) old.`;
    }
  }

  toString() {
    return JSON.stringify(this);
  }
}

class Child extends Person {
  constructor(firstName, age, like = '') {
    super(firstName, age);
    this.like = like;
  }

  getGreeting() {
    return `Hiiiii! My name is ${this.name} yo!`;
  }
}

var me = new Person('Nicholas', 31);
var noOne = new Person();

console.log(me);
console.log(me.toString());
console.log(me.getDescription());
console.log(noOne.getDescription());
