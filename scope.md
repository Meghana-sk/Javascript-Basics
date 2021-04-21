# Scope in Javascript

    Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript.


- Block scope
- Function scope

## Lexical scope

```Javascript
    var a = 10;
    if(a){
    var d = 100;//function scoped
    let b= 20; //block scoped
    }
    else{
    const c = 40; //block scoped
    }

    console.log(d) //prints 100
    console.log(b); //error: b is not defined
```