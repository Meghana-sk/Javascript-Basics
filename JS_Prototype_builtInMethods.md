# Prototype methods in Javascript

In Javascript, every entity in some way considered as an object. 

The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (attribute) is not visible. Every function includes prototype object by default.

### Ways to create objects
---
```Javascript
    var a = {}
	var b = Object();
	var c = new Object(); //constructor function
	var d = Object.create(null);
```

### Ways to create functions
---
```Javascript
    function update(address){ //Function definition

    }

    var create = function(studentList){ //Function expression

    }

    var delete = (name) => { //Arrow function
    
    }

    var read = new Function(); //using constructor function
```

### Ways to create arrays
---
```Javascript
    let fruits = ["Orange","Mango","Banana"]

    let fullName = new Array("Meghana","Keshavamurthy"); //constructor method
```

### Built-in methods for Strings, Arrays, Objects
---
#### String methods and properties
```Javascript
    let name = "Meghana SK"
    console.log(name.length) //prints 10 as name has 10 characters including a space between 
    console.log(name.toUpperCase()) //prints "Meghana SK"
    console.log(name.toLowerCase()) //prints "meghana sk"
    name = name.replace('SK','KS') //updates name - SK is replaced by KS
    console.log(name) // "Meghana KS"
    console.log(name.split(" "));//prints ["Meghana","SK"] split returns an array of substrings splitted by space " "
    console.log(name.split(" ").join("-")) //prints "Meghana-SK" name is splitted by a space and substrings are joined by hyphen -

    let place = "   Bengaluru  "
    console.log(place.trim()) //prints "Bengaluru" after removing spaces from both the ends

    var str = "Hello world!";
    var res = str.slice(0, 5);
    console.log(res) // prints "Hello" after extracting characters at index 0 to index 5-1=4 to new string

    var str = "Hello world!";
    var res = str.substr(3, 6);
    console.log(res) //prints "lo wor" after extracting 6 continuous characters from index 3

    var subStr = str.substring(3,6);
    console.log(subStr) //prints "lo " after extracting characters from index 3 to index 6-1=5

    var a = 10
    console.log(a.toString()) //prints "10" after converting number a to string
```
#### Note: 
- length is a property, not method.
- there are several methods like charAt(position), indexOf(character), concat(), startsWith(character),endsWith(character), search() etc

#### Array methods
```Javascript
    var cars = ["Saab", "Volvo", "BMW"];
    console.log(cars.length) //3

    var newCars = ["Safari", "Mercedes"];
    var CARS = cars.concat(newCars);
    console.log(CARS) // ["Saab", "Volvo", "BMW","Safari", "Mercedes"]

    console.log(CARS.indexOf("Safari")) //3 (returns -1 if element not present in the array)

   
var Names = ["Meghana", "Nithin", "Deepika"]

console.log(Names.includes(“Meghana”)) //true
console.log(Names.includes(“SK”)) //false


console.log(names.join(':')) // prints "Meghana:Nithin:Deepika" after joining all elements of array using delimiter :

/*	Selects a part of an array from specified index start and end-1, and returns the new array . If no end is mentioned, complete array from start index considered*/

console.log(names.slice(2))
// prints ["Deepika"]
console.log(names.slice(0))
//prints ["Meghana", "Nithin", "Deepika"]
console.log(names.slice(1))
//prints ["Nithin", "Deepika"]

names.push("mtm") //appends mtm to names
console.log(names)
//prints ["Meghana", "Nithin", "Deepika","mtm"]

names.pop()//removes last element of names
console.log(names)
//prints ["Meghana", "Nithin", "Deepika"]

names.shift() //removes first element of array
console.log(names) // ["Nithin", "Deepika"]

names.unshift("SK")// adds element SK to beginning of array
console.log(names) // ["SK","Nithin", "Deepika"]

console.log(names.sort()) // ["Deepika","Meghana","Nithin"]

const characters = ['a', 'b', 'c'];

function display(element){
    console.log(element)
}
//forEach executes display function for each element of array characters
characters.forEach(display); //prints "a" "b" "c" one below the other

console.log(Array.isArray(characters)) // true since characters is an array
```
#### Object methods
---
```Javascript
    let box = {
    color: 'red'
};

let dest = {}
Object.assign(dest, box); //only clone, only copy of value is made, change in dest does not affect box

console.log(box); // {color: 'red'}
console.log(dest); //{color: 'red'}
dest.name = "square" 
console.log(box); // {color: 'red'}
console.log(dest); //{color: 'red',name: "square"}

console.log(Object.keys(dest)) // ["color","name"]
console.log(Object.values(dest)) // ["color","square"]
```

### Scheduling
---
We can execute functions/tasks in certain time intervals using below mentioned methods

- setInterval() - keeps running after specified time
- setTimeout() - executes after specified time
- clearInterval()
- clearTimeout()

```Javascript
    const timerFn = function(){
        console.log("Iam executing after 2 sec");
    }

    console.log("Running 1");

    setTimeout(timerFn,2000)// executes timerFn after 2000ms
    

    setTimeout(function(){
        console.log("executing after 0 sec"),0) //executes after main code executed
    })

    console.log("Running 2")

    //Running 1
    //Running 2
    //executing after 0 sec
    //Iam executing after 2 sec
```
```Javascript
    let counter = 0;
    const timer = setInterval(function(){
        console.log("Running after 3 sec");
        if(counter < 5)//to stop the execution, otherwise ing=fintely timer will be running
            clearInterval(timer);
        counter++;
    },3000)
    //Running after 3 sec
    //Running after 3 sec
    //Running after 3 sec
    //Running after 3 sec
    //Running after 3 sec
```




















##### Credits - MissingSkill initiative by Samal Gorai, MDN docs 