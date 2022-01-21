const person1 = {
    firstName: "Ali",
    age: 23
};

const person2 = {
    firstName: "Giovanni",
    age: 56
};

class Person {

    constructor(firstName, age){
        this.firstName = firstName || "", // in the constructor we define and assign to create properties
        this.age = age || 0
    }

    tellAge(){
        return this.age
    }
};

const marco = new Person("Marco", 48) // (new Person() = constructor()) The constructor function invoked

const carlos = new Person("Carlos", 25) // (new Person() = constructor()) The constructor function invoked

const carol = new Person("Carol") // (new Person() = constructor()) The constructor function invoked

console.log(person1.tellAge())
console.log(carol.tellAge())
console.log(carlos.tellAge())
console.log(marco.tellAge())


class Animal {
    constructor(nameOfAnimal, ageOfAnimal){
      this.fur = ""
      this.weight = 0
      this.age = ageOfAnimal
      this.legs = 4
      this.name = nameOfAnimal
    }
  
    speak(){
      return `Hello I am ${this.name}`
    }
  
    walk(){
      return `I am going out alone because I am ${this.age} years old`
    }
  };

const snowflake = new Animal("Snowflake", 3)

console.log(
    snowflake.speak(),
    snowflake.walk()
);

class Cat extends Animal{
    constructor(nameOfAnimal, ageOfAnimal){
        super(nameOfAnimal, ageOfAnimal)
        this.kind = "cat"
    }

    speak(){
        return super.speak() + ` and I am a ${this.kind}`
    }
};

class Dog extends Animal{
    constructor(nameOfAnimal, ageOfAnimal, kind){
        super(nameOfAnimal, ageOfAnimal)
        this.kind = kind
    }

    speak(){
        return super.speak() + ` and I am a ${this.kind}`
    }
};

const martini = new Dog("Martini", 12)
console.log("Martini speaks and walks: ", martini.speak(), martini.walk())

const santana = new Dog("Santana", 9)
console.log("Santana speaks and walks: ", santana.speak(), santana.walk())

const chucho = new Dog()

