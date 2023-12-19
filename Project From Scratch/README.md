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
    <h1>Hello, World!</h1>
  </body>
</html>
```

Step 3: Install react package
`npm i react react-dom react-router`

Step 4 : Install Parcel
`npm install -D parcel`

Step 4: Add below snippet to package.json script <br />
```
    "start": "parcel index.html",
    "build": "parcel build index.html"
```
## .Net Core

