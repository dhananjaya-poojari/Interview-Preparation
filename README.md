# Javascript Interview Preparation

### Table of Contents
<details>
<summary>Basic Concepts</summary>
 
1. [Difference between null, undefined and not defined](#difference-between-null-undefined-and-not-defined)<br />
1. [Class and Constructor](#class-and-constructor)    
</details>

<details>
<summary>Core Concepts</summary>
 
1. [Hoisting](#hoisting)<br />
1. [Scope and Scope chain](#scope-and-scope-chain)
1. [Lexical Enviroment](#lexical-enviroment)<br />
1. [Variable Shadowing](#variable-shadowing) <br />
1. [Closures](#closures)
1. [Garbage Collector](#garbage-collector)       
</details>

### Hoisting
Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is actually executed. This means that you can use a variable or a function in your code even before it's declared.

![image](https://github.com/dhananjaya-poojari/Javascript-Interview/assets/77887564/1a68f112-d35c-4468-a8c9-52d51c093937)

This means that irrespective of where the variables and functions are declared, they are moved on top of the scope. The scope can be both local and global.

Only variables declared using the var keyword and functions declared using the function keyword, such as in the example below, exhibit hoisting behavior, allowing them to be accessed before their actual declarations:
```
function getName(){
    console.log("Hello" + aa)
}
```
Other variable declaration keywords like let and const do not exhibit the same hoisting behavior; attempting to access them before declaration results in a ReferenceError due to the "temporal dead zone."
```
var getName = function () {
    console.log("Hello" + aa)
}
```
The variable getName is accessible even before its declaration due to hoisting, but attempting to invoke getName() before its assignment or initialization would result in an error.

> Doc: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting <br />
> Vid: https://youtu.be/Fnlnw8uY6jo?feature=shared <br />

### Scope and Scope chain
**Global Scope:**
A variable with global scope is one that can be accessed from anywhere in the application. It is the default scope for all code running in script mode.

**Local Scope:**
Any declared variable inside of a function is referred to as having local scope. Within a function, a local variable can be accessed. It throws an error if you attempt to access any variables specified inside a function from the outside or another function.The scope for code running in module mode.

### Difference between null, undefined and not defined
**Null**
 It is an assignment value which indicates that variable points to no object.
```
const foo = null;
foo; //null
console.log(typeof(null)) // object
```
**undefined**
Whenever we declare a variable without assigning any value to it, javascript implicitly assigns its value as undefined.
![image](https://github.com/dhananjaya-poojari/Javascript-Interview/assets/77887564/f72e9e6a-fab9-44e5-b95f-f52041298510)

**not defined**
A not defined is a variable which is not declared at a given point of time with declaration keyword like var, let or const.
![image](https://github.com/dhananjaya-poojari/Javascript-Interview/assets/77887564/882e0803-7170-4e45-995e-9ce5d3ebadbe)

### Lexical Enviroment
A lexical environment is also known as a scope, which determines the accessibility of variables and functions.
![image](https://github.com/dhananjaya-poojari/Javascript-Interview/assets/77887564/78676c4f-11f3-4760-8bb7-fb72bab62b4e)

### Variable Shadowing
Variable shadowing in JavaScript is a mechanism where a variable declared in an inner scope has the same name as a variable in an outer scope. When this happens, the inner variable hides the outer variable.
```
var a=100;
const b=200;

{
  var a=10;
  const b=20;

  console.log(b)
// Prints 20
}

console.log(a);
// Prints 10

console.log(b)
// Prints 200
```
### Closures
A closure happens when a function keeps a connection to the information around it. It's like a bundle where a function and its environment (the stuff it knows about) are tied together. So, in simple terms, a closure lets an inside function reach out and use the details from an outside function.
```
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

```
In the above example we can access variable of makeFunc using the inner function exposure
```
function func() {
  for (let j = 0; j < 5; j++) {
    setTimeout(() => {
      console.log(j);
      // Prints 0 1 2 3 4 
    }, 1);
  }
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
      // Prints 5 5 5 5 
    }, 1);
  }

  while (j < 10) {
    let k=j;
    setTimeout(() => {
      console.log(k);
      // Prints 5 6 7 8 9 
    }, 1);
   j++;
  }
}

func();
```
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

### Class and Constructor
```
function Counter() {
  let j = 0;
  this.increment = () => {
    j++;
  };
  this.decrement = () => {
    j--;
  };
  this.peek = () => {
    console.log(j);
  };
}

const counter1 = new Counter();
counter1.increment();
counter1.peek();
```
When a function is associated with the this keyword, it should be invoked using the new keyword to access the properties or functions attached to it.

### Garbage Collector
![image](https://github.com/dhananjaya-poojari/Javascript-Interview/assets/77887564/d18e2ffa-7174-44c1-ad5e-e6c59c0cd80c) <br />
In the provided example, `j` remains accessible within the closure or block scope, while `z` is removed. The JavaScript engine, employing its garbage collection mechanism, determines which variables to retain in memory and which to discard.
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management#garbage_collection
