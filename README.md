# Javascript Interview Preparation
 [Hoisting](https://github.com/dhananjaya-poojari/Javascript-Interview#hoisting)<br />
 [Difference between null, undefined and not defined](https://github.com/dhananjaya-poojari/Javascript-Interview#difference-between-null-undefined-and-not-defined)
 [Scope and Scope chain](https://github.com/dhananjaya-poojari/Javascript-Interview#scope-and-scope-chain)
## Hoisting
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

## Scope and Scope chain
**Global Scope:**
A variable with global scope is one that can be accessed from anywhere in the application. It is the default scope for all code running in script mode.

**Local Scope:**
Any declared variable inside of a function is referred to as having local scope. Within a function, a local variable can be accessed. It throws an error if you attempt to access any variables specified inside a function from the outside or another function.The scope for code running in module mode.

## Difference between null, undefined and not defined
**Null**
 It is an assignment value which indicates that variable points to no object.
```
const foo = null;
foo; //null
console.log(typeof(null)) // object
```
**undefined **
Whenever we declare a variable without assigning any value to it, javascript implicitly assigns its value as undefined.
![image](https://github.com/dhananjaya-poojari/Javascript-Interview/assets/77887564/f72e9e6a-fab9-44e5-b95f-f52041298510)

**not defined**
A not defined is a variable which is not declared at a given point of time with declaration keyword like var, let or const.
![image](https://github.com/dhananjaya-poojari/Javascript-Interview/assets/77887564/882e0803-7170-4e45-995e-9ce5d3ebadbe)

