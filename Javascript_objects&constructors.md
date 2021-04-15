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
