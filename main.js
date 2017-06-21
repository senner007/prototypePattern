function Person(gender, job) {
  this.gender = gender;
  this.occupation = job;
}

Person.prototype.sayHi = function() {
  alert('Hi, my name is ' + this.name + ', I am a ' + this.gender)
}

function FemaleSecretary(name) {
  Person.call(this, 'girl', 'secretary')
  this.name = name;
}
FemaleSecretary.prototype = Object.create(Person.prototype)

var tanja = new FemaleSecretary('Tanja');
console.log(tanja)
tanja.sayHi()
