class Animal {
    name = "paus"
    age = 7
    isMammal = true
    constructor(name, age, isMammal) {
       this.name = name;
       this.age = age;
       this.isMammal = isMammal;
    }
}
class Rabbit extends Animal {
    eat(){
        return `${this.name} sedang makan!`
        return this.isMammal
    }
}
class  Eagle extends Animal {
    fly(){
        return `${this.name} sedang terbang!`
        return this.isMammal
    }
}
const myRabbit = new Rabbit("Labi", 2, true);
const myEagle = new Eagle("Elo", 4, false);


