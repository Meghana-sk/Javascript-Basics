# Javascript Functions

A function is simply a set of statements that performs a task. It can be just displaying some data or processing a data input etc.

## Function definitions
---

- Function declarations/statements
- Function expressions
- Arrow functions

### 1. Function declaration

Function can be defined using keyword `function` followed by function name with parameters enclosed in parentheses (), followed by body of function defined inside curly braces {} which defines scope of the function

```Javascript
    function add(number1,number2){
        let sum = number1 + number2;
        console.log("sum of ",number1," and ",number2," = ",sum);
    }

    add(10,20) //calling a function, here values 10 and 20 are copied by value to number1 and number2 respectively
```

```Javascript
    function display(names){
        names[2] = "Lincoln" 
        console.log(names); // prints ["Gandhi","Nelson","Lincoln","Tagore"]
    }

    let originalNames = ["Gandhi","Nelson","Teresa","Tagore"]
        
display(originalNames) //here originalNames array is copied by reference to names parameter in function display. Hence originalNames and names points to same location, changing elements of either array modifies the other array too


console.log(originalNames)
["Gandhi","Nelson","Lincoln","Tagore"] //change happened to originalNames too.
```

```Javascript
    function double(number){
        return number * 2 + {}; // evaluated as 40 + [] which results in concatenation
    }

    function triple(number){
        return number * 3 + [99] //be careful!!!🙃
    }

    var doubleNumber = double(20)
    console.log(doubleNumber) // 40
    console.log(typeof doubleNumber) // "string"
    
    var tripleNumber = triple(9)
    console.log(tripleNumber, typeof tripleNumber) //"2799" "string"
```

Note: No restriction in js to pass parameters while calling the function even if in definition of function parameter is declared, if parameter is not received when called, undefined value is taken

```Javascript
    function Counter(value){
        console.log(value); //undefined printed
    }

    Counter();

```

### 2. Function expressions

Here we define an anonymous(without a function name) function and assign it to a variable.

#### Note: function name can be included in ES5 notin ES6

```Javascript
    var cube = function(number) {
        return number^3;
    }
    var numberCube = cube(10);
    console.log(numberCube) //1000
```

### 3. Arrow functions

It is an alternative to function expressions. Here `function` is omitted and it is defined using a parameters inside parenthese() followed by arrow =>.

```Javascript
    var square = (number) => {
        return number * number;
    }

    console.log(square(7)); //49
```
- Whenever single parameter is received, parentheses() can be omitted in arrow function definition

```Javascript
    var square = number => {
        return number * number;
    }

    console.log(square(7)); //49
```


### Note: Most important difference between function expressions,arrow functions and function declarations

- Functions declarations are hoisted i.e, so you can call them before you declare them.

- Below code snippet works fine since hoisting causes function declarations to move to the top irrespective of where they are declared

```Javascript
    sum(20,30.58)

    function sum(number1,number2){
        console.log("sum = ",number1 + number2)
    }
```

- Functions expressions and arrow function declarations are not hoisted.

- Below code snippet does not work as we get typerror saying sum is not a function

```Javascript
       sum(20,30.58)

    var sum = function(number1,number2){
        console.log("sum = ",number1 + number2)
    } //does not work
```

```Javascript
       sum(20,30.58)

    var sum = (number1,number2) => {
        console.log("sum = ",number1 + number2)
    } //does not work
```


### Some ways to safeguard code when functions are not defined but may be called, resulting in unexpected behaviour and crashing
---    

    fn_name is an object which always has truthy value, so !!fn_name is equivalent to !!true => !false => true and typeof fn_name checks whether it's a function, then only it executes. This safeguards from crashing-like when function is not defined, we can easily trace out

```Javascript
var fn_name = 1545;
!!fn_name && (typeof fn_name === “function") && fn_name() //doesn’t execute
```

### Nested functions
- Function inside another function is called nested function or `closure`.
- Nested function can "inherit" the arguments and variables of its containing/outer function.
- Below, the inner function forms a closure: the inner function can use the arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function.

```Javascript
    function outer(){
        console.log("Call from outer function")
        inner() //hoisting
        function inner(){
            console.log("Call from inner function")
        }
    }

    outer() //prints 
    //Call from outer function
    //Call from inner function
```
### Higher order functions

- Note:  `First-class` functions are functions in that are treated like any other variable. For example,a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

- The function that we pass as an argument to another function, is called a Callback function.

- Pure functions operate on a parameters received, doesn’t alter the parameters.

- `Higher order function` is a function returning a function or function receiving another function as a parameter

### Function returning a function as reference

```Javascript
    function outerDouble(number){ 
        console.log(number);
        function innerDouble(){
            console.log(number * 2)
            } 
        return innerDouble;
    }

var double = outerDouble(4) //receives reference to innerDouble function

console.log(double,typeof double)
// 4
// [Function innerDouble] "function"

//to execute it, call double as a function
double() //prints 16
```

### Function calls chaining

```Javascript
    var sport = function(){
        var cricket = function(player){
            var ipl = function(team){
                return team;
            }
            return ipl;
        }
        return cricket
    }

    var cricket = sport();
    var result = cricket("ViratKohli");
    var final = result("RCB");
    console.log(final);
    //RCB


    var output = sport()("MSD")("CSK"); 
    console.log(output);
    //CSK

```

### Function passed as argument to function


```Javascript
    const display = (value) => {
        console.log("value : ",value);
    }

    const task = function(param){
        const rate = 4.9;
        const amount = 5000;
        const time = 3
        const interest = amount * time * rate / 100;
        param(interest); 
    }

    task(display);//735
```

### Immedialtely Invoked Function Expression(IIFE)
---
- An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

- It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

    - The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
    - The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function. 
###### source: MDN IIFE

1. 
```Javascript
    (function(a,b){
        console.log(a + b);
    })(10,20)

    //30 is printed
```
2. 
```Javascript
    var receiver = (function(){
        console.log("Starting up");
        function sayHi(value){
            console.log("Hello",value);
        }
        return sayHi;
    })();

    receiver("SK");

    //Starting up
    //Hello SK
```
3. 
```Javascript
     var receiver = (function(){
        console.log("Starting up"); //called only once
        function sayHi(value){
            console.log("Hello",value);
        }
        return sayHi;
    })();

    receiver("SK");
    receiver("MSD");
    //Starting up
    //Hello SK
    //Hello MSD
```

### Inline functions

```Javascript
    var outside = (function(next){
        console.log("Starting...");

        function sayHello(value){
            console.log("inside sayHello fn");
            next && typeof next === "function" && next(value);
        }
        return sayHello;
    })(function(value){
        console.log("printing inline values: ",value);
    }); //inline function

    console.log(10)
    // Starting...
    //inside satHello fn
    //printing inline values: 10
```


##### Credits: Missingskill intiative by Samal Gorai, MDN docs