# Javascript Interview Preparation
> [27 Quick Questions You Need To Master](https://dev.to/_ndeyefatoudiop/javascript-data-types-27-quick-questions-you-need-to-master-1828?ref=dailydev)


### Table of Contents
<details>
<summary>Basic Concepts</summary>
 
1. [Difference between null, undefined and not defined](#difference-between-null-undefined-and-not-defined)<br />
1. [Class and Constructor](#class-and-constructor)    <br />
1. [Types of Function](#types-of-function)
2. [map, filter and reduce](#map-filter-and-reduce)
3. [Prototypal Inheritance](#prototypal-inheritance)
4. [Promises](#promises)
5. [Difference between for...in and for...of](#difference-between-forin-and-forof)
6. [Polyfill for bind Method](#polyfill-for-bind-method)
7. [Call and Apply Method](#call-and-apply-method)
8. [async and await](#async-and-await)
9. [Rest parameters](#rest-parameters)
</details>

<details>
<summary>Core Concepts</summary>
 
1. [Hoisting](#hoisting)<br />
1. [Scope and Scope chain](#scope-and-scope-chain)
1. [Lexical Enviroment](#lexical-enviroment)<br />
1. [Variable Shadowing](#variable-shadowing) <br />
1. [Closures](#closures)
1. [Callback Function](#callback-function)
6. [Debouncing](#debouncing)
8. [Two issues while using callbacks](#two-issues-while-using-callbacks)
10. [Currying](#currying)
11. [Iterators and generators](#iterators-and-generators)
</details>

<details>
<summary>Browser Concepts</summary>
 
1. [Garbage Collector](#garbage-collector) <br />
2. [Event Loop](#event-loop)
3. [Callback Queue and Micro Task Queue](#callback-queue-and-micro-task-queue)
4. [Google V8 Architecture](#google-v8-architecture)
5. [Stack and Heap](#stack-and-heap)
9. [Difference between node js and js in browser](#difference-between-node-js-and-js-in-browser)
11. [Headless browser](#headless-browser)
12. [DOM and BOM](#dom-and-bom)
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
![image](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/fe92e7f9-ae5d-4c56-b5b7-1443559dab17)

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
![Stack and Heap](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/51ac5658-dfd9-427b-8c4b-1e53d2020e97)

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
JavaScript implements inheritance by using objects. Each object has an internal link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.By definition, null has no prototype and acts as the final link in this prototype chain.
![Screenshot 2023-12-05 at 10 02 41 AM](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/cf0f2c0c-e73b-47f4-ad9c-42963ee736ab)
```
const num = 10;
const obj = {};
const arr = [];
const func = function (){}
console.log(num.__proto__.__proto__ === obj.__proto__) // true
console.log(num.__proto__.__proto__ === obj.__proto__) // true
console.log(func.__proto__.__proto__ === obj.__proto__) // true
console.log(Array.prototype === arr.__proto__) // true
console.log(Number.prototype === num.__proto__) // true
console.log(obj.__proto__.__proto__) // null
```
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

### map, filter and reduce
#### map
The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
```
const func = (arr) => {
  let output = [],
    i = 0;
  while (i < arr.length) {
    output[i] = arr[i] + 10;
  }
  return output;
};

let output = arr.map((i) => i + 10);
```
#### filter 
The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
```
const func = (arr) => {
  let output = [],
    i = 0;
  while (i < arr.length) {
    if (arr[i] > 10) output.push(arr[i]);
  }
  return output;
};

let output = arr.filter((i) => i > 10);
```
#### reduce
The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
```
const func = (arr) => {
  let output = 0,
    i = 0;
  while (i < arr.length) {
    output += arr[i];
  }
  return output;
};

let output = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
```
### Two issues while using callbacks

1. `Callback hell`<br />
 When a function is passed as an argument to another function, it becomes a callback function. This process continues and there are many callbacks inside another's Callback  function.
 This grows the code horizontally instead of vertically. That mechanism is known as callback hell. 

2. `Inversion of control`<br />
The callback function is passed to another callback, this way we lose the control of our code. We don't know what is happening behind the scene and the program becomes very difficult to maintain. 
That process is called inversion of control.

### Promises
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error).<br />
A Promise is in one of these states:
1. `pending`: initial state, neither fulfilled nor rejected.
1. `fulfilled`: meaning that the operation was completed successfully.
1. `rejected`: meaning that the operation failed.
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise  
### Difference between for...in and for...of
`for...in`<br />
The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.
```
const object = { a: 1, b: 2, c: 3 };
for (const [key,value] in object) {
  console.log(`${key}: ${value}`);
}
// Expected output:
// "a: 1" "b: 2" "c: 3"
const arr = [1,2,3];
for (const property in arr) {
  console.log(i);
}
// Expected output:
// 0 1 2
```
`for...of`<br />
The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList.
```
const array1 = ['a', 'b', 'c'];
for (const element of array1) {
  console.log(element);
}
// Output
// 'a' 'b' 'c'
```
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
### Difference between node js and js in browser
 | node js  | Browser js |
| ------------- | ------------- |
|Node.js is used to develop server-side applications.|JavaScript is used to add interactivity to web pages. |
|Node.js has full system access i.e can read and write directly to the file system.|Browser.js is sandboxed for the safety purposes and have access limited to the browser. |
|In Node.js many objects are missing like- window, location, document and etc. |In Browser.js many objects are missing like- global,require and etc.|
|In Node.js everything is a module i.e it is mandatory to keep everything inside a module.|moduling is not mandatory for browser javascript.|
### Polyfill for bind Method
```
Function.prototype.mybind = function (context, ...args1) {
  let fn = this;
  return function (...arg2) {
      return fn.apply(context, [...args1, ...arg2])
  }
};
```

In the context of the "bind" and "apply" methods in JavaScript, the initial object passed as the first argument becomes accessible within the function through the use of the "this" keyword.<br />
Example
```
let basic = {
  'name': 'shyam',
  'age': 24
};

function callMe(city) {
  console.log('Hi! my name is ' + this.name + ' and my age is ' + this.age + ' and my city is ' + arguments[0] + ' and state is ' + arguments[1]);
}
let callBinded = callMe.bind(basic, 'jammu');
callBinded('j&k');
```
> https://medium.com/@shyamtayal/lets-write-a-polyfill-for-bind-ac601290aab7
### Currying
Currying transforms a function with multiple arguments into a sequence/series of functions, each taking a single argument.<br />
Two ways you can achieve currying
1. bind
   ```
   const multifly = (x, y) => x * y;
   const multifyBy2 = multifly.bind(this, 2);
   console.log(multifyBy2(3));
   // Output 6
   ```
2. Closure
   ```
   const multifly = (x) => {
     return function (y) {
       return x * y;
     };
   };
   const multifyBy2 = multifly(2);
   console.log(multifyBy2(3));
   ```
### Call and Apply Method
Call and apply is a function that helps you change the context of the invoking function.it helps you replace the value of this inside a function with whatever value you want.<br />
The only `difference` is that in apply you can pass an array as an argument list.
```
func.call(thisObj, args1, args2, ...);
func.apply(thisObj, argumentsArray);
```
> https://www.freecodecamp.org/news/understand-call-apply-and-bind-in-javascript-with-examples/

### async and await
Async and await are keywords that can make `asynchronous` code look more like `synchronous` code.

Async functions always return a `promise`. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.

Async functions can contain zero or more await expressions. Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected.
### Rest parameters
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.
```
function f(a, b, ...theArgs) {
  const normalArray = args;
  // …
}
```
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

### Headless browser
A headless browser is a web browser without a graphical user interface. Headless browsers provide automated control of a web page in an environment similar to popular web browsers, but they are executed via a command-line interface or using network communication.

Headless browsers are mainly used for: 
- Running automated quality assurance tests
- Scraping websites

### Throttling

  
### DOM and BOM
The BOM (Browser Object Model) consists of the objects `navigator`, `history`, `screen`, `location` and document which are children of window.

In the document node is the DOM (Document Object Model), the document object model, which represents the contents of the page.e.g. `document` and all traversal you would do in it, `events`, etc.

### Iterators and generators
Generators differ from traditional functions. They can start and halt their execution multiple times. This allows them to yield numerous values and continue their execution later on, making them perfect for managing asynchronous operations, constructing iterators, and handling endless data streams.
```
function* Generator() {
 yield 1;
 yield 2;
 yield 3;
}

const generator = Generator();
generator.next() // will return 1
generator.next() // will return 2
```
`next()`: This method resumes the generator, returns the next yielded value, and shows if the generator has concluded with the done property.<br>
`return()`: This method ends the generator prematurely, as if you’ve executed a return command.

**Real time usage**: social media feed that supports infinite scrolling. In other words, as users scroll to the end of a list, additional posts are fetched and appended to the feed.<br>
> https://blog.stackademic.com/dont-be-afraid-of-javascript-generators-15c998aea652
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
