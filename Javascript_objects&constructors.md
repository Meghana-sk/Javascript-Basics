# Javascript objects and constructors

In Javascript, function is also an object.

```Javascript
    function Person(name,yearOfBirth){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }

    var Meghana = new Person("MSK",1997);
```
- W.r.t above code snippet, we have a function fromwhich we created a new object Meghana of type `Person`.

- Similarly, we can create a class instead of a function like the ones from Object Oriented Concepts.

- The constructor method is a special method of a class for creating and initializing an object of that class.


```Javascript
    class Person{
        constructor(name,yearOfBirth){
            this.name = name;
            this.yearOfBirth = yearOfBirth;
        }
        
    }

    var Meghana = new Person("MSK",1997);
```
- We can add methods to function objects or classes using `prototype`

```Javascript
    Person.prototype.getName = function(){
        return this.name;
    }

    Person.prototype.getYearOfBirth = function(){
        return this.yearOfBirth;
    }

    var hillary = new Person("Hillary",1968)

    console.log(Meghana.getName(),hillary.getYearOfBirth()) //prints "MSK" 1968
```

#### Inheritance

One enitity(child class/function) receives the propertiesof another entity(Base class/function)

```Javascript
    function RBI(regulator){
        this.regulator = regulator;
    }

    function Bank(name){
        this.name = name;
    }

    Bank.prototype.__proto__ = new RBI("RBI"); //Bank becomes child of RBI and can access properties of RBI

    var SBI = new Bank("SBI");
    console.log(SBI.regulator) //prints RBI
```


### Date object
---
JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since `1 January 1970 UTC`.

```Javascript
    var dateTime = new Date(); //creates a new Date object and dateTime gets access to all methods associated with dateTime

    console.log(dateTime.getDate()) //prints 15 since its 15/04/2021
    console.log(dateTime.getDay()) //prints 4 since its Thursday where 0 is represented as Sunday
    console.log(dateTime.getFullYear()) //prints 2021
    console.log(dateTime.getHours()) //prints 16
```
There are several methods for Date object apart from these like dateTime.now(),dateTime.getMinutes(),dateTime.getSeconds() etc

### Math object
---
Math is a built-in object that has properties and methods for mathematical constants and functions. It’s not a function object.

```Javascript
    console.log(Math.PI) //prints 3.141592653589793
    console.log(Math.exp(2)) //prints e^2 where e = 2.718
    console.log(Math.ceil(20.879))// prints 21 which is >= 20.879
    console.log(Math.floor(20.879)) //prints 20 which is < 20.879
    console.log(Math.power(3,2)) //prints 9 which is 3^2
    console.log(Math.sqrt(49)) //prints 7
    console.log(Math.sin(30)) //prints -0.9880316240928618 which sine value of 30
```
There are several other methods like `Math.cos(x),Math.random(),Math.sign(x),Math.log(x),Math.abs(x)` etc



##### Credits: Missingskill intiative by Samal Gorai, MDN docs
