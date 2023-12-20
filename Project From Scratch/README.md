## React

Step 1: Create folder and do `npm init`

Step 2: Create `index.html`,`index.js` and `styles.css`<br />
index.html
```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>My First Parcel App</title>
    <link rel="stylesheet" href="styles.css" />
    <script type="module" src="index.js"></script>
  </head>
  <body>
    <div id="root">Not rendered</div>
  </body>
</html>
```

Step 3: Install react package
`npm i react react-dom react-router-dom`

Step 4 : Install Parcel
`npm install -D parcel`

Step 4: Add below snippet to package.json script <br />
```
    "start": "parcel index.html",
    "build": "parcel build index.html"
```

Step 5: index.js for basic react app
```
import { useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <span>{count}</span>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
```

Step 6: Router index.js
```
import { useState } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <span>{count}</span>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  );
};
const About = () => {
  return <h1>Dhananjaya</h1>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

```
## .Net Core

Step 1: Create a new Project 

![image](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/aa4c3d57-5070-4d8b-9c1b-8a383e34d21e)

Step 2: Select the ASP.NET Core Web API template and select Next.

Step 3: In the Additional information dialog:
1. Confirm the Framework is .NET 8.0 (Long Term Support).
1. Confirm the checkbox for Use controllers(uncheck to use minimal APIs) is checked.
1. Confirm the checkbox for Enable OpenAPI support is checked.
1. Select Create.

![image](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/166847f1-8869-41eb-9192-e3f3d59dd0ec)

> https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-8.0
