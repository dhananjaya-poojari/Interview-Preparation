# Javascript Interview Preparation

### Table of Contents
<details>
<summary>Basic Concepts</summary>
 
1. [Difference between null, undefined and not defined](#difference-between-null-undefined-and-not-defined)<br />
1. [Class and Constructor](#class-and-constructor)    <br />
1. [Types of Function](#types-of-function)
</details>

<details>
<summary>Core Concepts</summary>
 
1. [Hoisting](#hoisting)<br />
1. [Scope and Scope chain](#scope-and-scope-chain)
1. [Lexical Enviroment](#lexical-enviroment)<br />
1. [Variable Shadowing](#variable-shadowing) <br />
1. [Closures](#closures)
1. [Garbage Collector](#garbage-collector) <br />
1. [Callback Function](#callback-function)
2. [Event Loop](#event-loop)
3. [Callback Queue and Micro Task Queue](#callback-queue-and-micro-task-queue)
4. [Google V8 Architecture](#google-v8-architecture)
5. [Stack and Heap](#stack-and-heap)
6. [Debouncing](https://github.com/dhananjaya-poojari/Interview-preparation/blob/main/Javascript/README.md#debouncing)
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
Garbage Collection is the process of tracking live objects while destroying unreferenced objects in the heap memory to make room for new objects that will be created in the future.<br />
![image](https://github.com/dhananjaya-poojari/Javascript-Interview/assets/77887564/d18e2ffa-7174-44c1-ad5e-e6c59c0cd80c) <br />
In the provided example, `j` remains accessible within the closure or block scope, while `z` is removed. The JavaScript engine, employing its garbage collection mechanism, determines which variables to retain in memory and which to discard.
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management#garbage_collection

### Types of Function

#### Function statement or Function Declaration
```
function a() {
  //...
}
```
A function declaration also known as a function statement declares a function with a `function` keyword.
#### Function Expression
```
const a = function () {
  //...
};

```
#### Anonymous Function
```
(function () {
   //...
});
```
If you don’t place the anonymous function inside the `()`, you’ll get a syntax error. The `()` makes the anonymous function an expression that returns a function object.
An anonymous function is not accessible after its initial creation. Therefore, you often need to assign it to a variable.
```
let show = function() {
    //...
};
```
the anonymous function has no name between the `function` keyword and parentheses `()`
####  Named Function Expression
```
const b = function xx() {
  //...
  // Here you can access xx function but not outside
};
// Here you can't access xx
```
Outside the function can't access
#### First Class Function
```
const c = () => {
  return function(){}
};
console.log(c);
```
This means that functions can be assigned to variables, passed as arguments to other functions,and returned from functions.
> https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function

### Callback Function
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
```
setTimeout(function xx() {
  //....
}, 1);
```
In the provided function, a callback function `xx` is passed as an argument, and it is set to be executed after a delay of 1 second.
>https://developer.mozilla.org/en-US/docs/Glossary/Callback_function

### Web API's
![image](https://github.com/dhananjaya-poojari/Javascript-Interview/assets/77887564/22aaf5b6-5d64-4879-81b0-1b2a438c238c)
>https://developer.mozilla.org/en-US/docs/Web/API

### Event Loop
The event loop is a mechanism in JavaScript that allows code to be executed asynchronously. It is a single-threaded loop that is constantly running and checking for events. When an event occurs, the event loop adds the event to a queue `(Callback Queue or Microtask Queue)`. The event loop then checks the call stack to see if it is empty. If it is, the event loop removes the first event from the queue and adds it to the call stack. The event loop then executes the event.

The event loop is responsible for executing all of the code in a JavaScript program. This includes both **synchronous and asynchronous code** . Synchronous code is code that is executed in the order that it is written. Asynchronous code is code that is executed at a later time, even if it is written before other code that is currently being executed.

> https://dev.to/nodedoctors/an-animated-guide-to-nodejs-event-loop-3g62
### Callback Queue and Micro Task Queue
The Microtask queue has a **higher priority** than the callback queue which means that if both queues are scheduled to be executed at the same time, the microtask queue will be executed first.
![image](https://github.com/dhananjaya-poojari/Javascript-Interview/assets/77887564/1e7413af-c838-494c-83e9-1e09f6b40f0c)

#### Microtask Queue
When the asynchronous task is performed with the help of javascript promises, the output from the web browser is pushed to the microtask queue.<br >
Some examples of tasks that are added to the callback queue include:
+ Promises
+ queueMicrotask()
+ AJAX
#### Callback Queue
The callback queue is a queue of tasks that are executed after the current task. The callback queue is handled by the JavaScript engine after it has executed all tasks in the microtask queue.<br />
Some examples of tasks that are added to the callback queue include:
+ SetTimeout()
+ SetInterval()
+ I/O requests ( click, drag and drop and etc events )

> https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide

### Google V8 Architecture
![image](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/7f1c98f5-dd1a-4044-84ad-d5441b38b16d)

#### Absrct syntax Tree
Abstract syntax trees are data structures widely used in compilers , due to their property of representing the structure of program code.
```
const medium = 'good ideas';
```
![image](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/d78cc3f7-03d1-49c2-a6b8-018f9f8c81d3)

#### Mark and Sweep
![image](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/c95ce795-b113-4572-b447-c68e1aca0767)<br />
The V8 garbage collector has a few essential tasks that it has to do periodically:
1. Identify live objects.
1. Recycle/reuse the memory occupied by dead objects.
1. Compact/defragment memory. (Depends on scenario of the GC)

#### Inlining
Inlining, also known as inline expansion, is a compiler optimization that replaces a function call with the body of the function being called.

#### Copy Elision
Copy elision is a compiler optimization technique that eliminates the need to copy an object when it is passed as an argument to a function or returned from a function. This can improve performance by reducing the number of times the compiler has to generate code to copy objects.

#### Inline caching
Inline cache is an optimization used in V8 for speeding up property accesses in bytecode generated by Ignition (the interpreter in V8). Roughly speaking, when a JavaScript function is run, Ignition will compile the function into bytecode, which then collects profiling data and feedback every time the function is run.

#### Ignition Interpreter
Ignition is a fast low-level register-based interpreter written using the backend of TurboFan.

> https://astexplorer.net/
> https://cabulous.medium.com/how-v8-javascript-engine-works-5393832d80a7
> https://www.youtube.com/watch?v=p-iiEDtpy6I&t=722s&ab_channel=JSConf

### Stack and Heap
In JavaScript, memory management involves the stack and heap, with value types stored on the stack and reference types on the heap. Value types include primitives like numbers (int, double, float), characters, and string, while reference types encompass objects, arrays, and class instances.
```
const func1 = () => {
  let a = 0,
    b = [1, 2, 3];
  func2(a, b);
  console.log("a = ", a, " b = ", ...b);
  // Prints a =  0  b =  0 2 3
};

const func2 = (a, b) => {
  a = 10;
  b[0] = 0;
  console.log("a = ", a, " b = ", ...b);
  // Prints a =  10  b =  0 2 3
};
func1();
```
In the above example the array value chaged but int value didn't changed
>https://medium.com/@mmoshikoo/stack-heap-dont-start-to-code-without-understanding-them-b182313bdf24

### Debouncing
Debounce is a powerful technique used to optimize event handling by delaying the execution of a function until after a specified period of inactivity.
```
function debounce(func, wait, immediate) {
  var timer;
  return function() {
    var args = arguments;
    var context = this;
    clearTimeout(timer);
    timer = setTimeout(function() {
      func.apply(context, args);
    }, wait);
    if (immediate) {
      func.apply(context, args);
    }
  };
}
```
### Prototypal Inheritance
