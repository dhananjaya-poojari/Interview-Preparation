# Javascript Interview Preparation
 [Hoisting](https://github.com/dhananjaya-poojari/Javascript-Interview#hoisting)
## Hoisting
Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is actually executed. This means that you can use a variable or a function in your code even before it's declared.

![image](https://github.com/dhananjaya-poojari/Javascript-Interview/assets/77887564/1a68f112-d35c-4468-a8c9-52d51c093937)

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
