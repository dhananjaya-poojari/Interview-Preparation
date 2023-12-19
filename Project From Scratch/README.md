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

