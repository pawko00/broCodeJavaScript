//A object is a colletion of related properties and/or methods.
//Can represent real world objects(people,products,places)
//Object = {key:value, function}


const person = {
    name: "Dzony",
    surname: "Fofane",
    age: 20,
    isEmployed: true,
    sayHello: () => console.log("Hello"),
    sayBye: function(){console.log("Bye")} 
};

console.log(person.age);
console.log(person.sayBye); 

//This operator - required when we are trying to access property/method within an object scope


const person2 = {
    name:"Spongebob",
    surname:"Squarepants",
    favFood:"Hamburger",
    sayHello: function(){console.log(`Hi, my name is: ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

console.log(this)//it will return an object of "Window" and all window properties


//THIS KEYWORD DOES NOT WORK WITH ARROW FUNCTION. THIS WITHIN ARROW FUNCTION WILL RETURN PROPERTIES OF AN WINDOW OBJECT.


//CONSTRUCTOR -- SPECIAL METHOD THAT DEFINES THE PROPERTIES AND METHODS OF AN OBJECT
//
function Car(make,model,year,color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford","Mustand",2023,"red");

//the "new" keyword is very important while working with objects.
//it allows us to fully use the prototype mechanism, althought theoretically we can create an object via return statement 