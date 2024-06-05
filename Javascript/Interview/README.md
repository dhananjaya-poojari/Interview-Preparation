
<details>
<summary>Liquiloans</summary>

#### Meta Tags
`meta tags` are HTML tags used to provide additional information about a page to search engines and other clients. Clients process the meta tags and ignore those they don't support. meta tags are added to the <head> section of your HTML page and generally look like this
```
<!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="description" content="Author: A.N. Author, Illustrator: P. Picture, Category: Books, Price:  £9.24, Length: 784 pages">
    <meta name="google-site-verification" content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34=">
    <title>Example Books - high-quality used books for children</title>
    <meta name="robots" content="noindex,nofollow">
  </head>
</html>
```
#### Difference between HTML and HTML5
| Feature/Aspect                       | HTML                                  | HTML5                              |
|--------------------------------------|---------------------------------------|------------------------------------|
| **Doctype Declaration**              | `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">` | `<!DOCTYPE html>`                  |
| **Character Encoding**               | `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">` | `<meta charset="UTF-8">`           |
| **New Elements**                     | Not available                         | `<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`, `<figure>`, `<figcaption>`, `<aside>`, `<mark>`, `<time>` |
| **Multimedia Support**               | Uses `<object>`, `<embed>`, `<param>` | Native support with `<audio>`, `<video>` |
| **Graphics and Visual Content**      | Uses plugins like Flash               | `<canvas>`, `<svg>`                 |
| **Form Enhancements**                | Basic form elements like `<input>`, `<textarea>`, `<button>` | New input types (`email`, `date`, `url`, etc.), new attributes (`placeholder`, `autofocus`), and new elements (`<datalist>`, `<keygen>`, `<output>`) |
| **APIs and New Capabilities**        | Limited to external libraries and plugins | Integrated APIs like Geolocation, Web Storage, Web Workers, Web Sockets |
| **Deprecated Elements and Attributes** | `<font>`, `<center>`, `<big>`, `<basefont>`, `<applet>`, `<isindex>`, etc. | These elements are obsolete and should not be used |
| **Semantic Structure**               | Generic structure using `<div>` and `<span>` | Semantic elements for better structure and readability |
| **Drag and Drop**                    | Not available                         | Native drag and drop support       |
| **Local Storage**                    | Cookies                               | Web Storage API (`localStorage`, `sessionStorage`) |
| **Error Handling**                   | Traditional, less descriptive         | Improved, more descriptive error handling |

#### Flexbox and grid
**Flexbox**: The CSS Flexbox offers a one-dimensional layout. It is helpful in allocating and aligning the space among items in a container (made of grids). It works with all kinds of display devices and screen sizes.
![image](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/0888ac17-b4eb-4380-b048-0dfa3711917d)

**Grid**:CSS Grid Layout, is a two-dimensional grid-based layout system with rows and columns, making it easier to design web pages without having to use floats and positioning. Like tables, grid layout allow us to align elements into columns and rows.
![image](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/a73a25ec-8a18-469c-a43e-9303ed8542e5)

> https://www.geeksforgeeks.org/comparison-between-css-grid-css-flexbox/
#### Promise.race()
The Promise.race() static method takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that settles.
```
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// Expected output: "two"
```
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
#### Differences Between Session Storage, Local Storage, and Cookie Storage
| Feature                 | Session Storage                     | Local Storage                       | Cookie Storage                      |
|-------------------------|-------------------------------------|-------------------------------------|-------------------------------------|
| **Scope**               | Per window or tab                   | Across all windows and tabs         | Sent to server with every request   |
| **Lifetime**            | Until the tab/window is closed      | Persistent until manually deleted   | Can be set to expire at a specific time |
| **Capacity**            | ~5-10MB                             | ~5-10MB                             | ~4KB                                |
| **Accessibility**       | Window/tab that created it          | Any window/tab from the same origin | Any window/tab from the same origin |
| **Storage Location**    | Client-side                         | Client-side                         | Client-side                         |
| **Use Cases**           | Temporary data (e.g., session data) | Persistent data (e.g., user settings) | Small data (e.g., user authentication) |
| **Data Format**         | Strings only                        | Strings only                        | Strings only                        |
| **Security**            | Accessible via JavaScript           | Accessible via JavaScript           | Accessible via JavaScript and sent to server |
| **Communication**       | Not sent to server                  | Not sent to server                  | Sent to server with each HTTP request |

#### Object.freeze()
The `Object.freeze()` static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.
```
const obj = {
  prop: 42,
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// Expected output: 42
```
#### Virtual List in React
A virtual list is a technique used to efficiently render large lists by only displaying a small portion of the items (the visible ones) and dynamically loading more items as the user scrolls. This reduces the number of DOM elements rendered at any one time, improving performance and responsiveness.

> https://www.npmjs.com/package/react-window
</details>
