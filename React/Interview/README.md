# Interview Experience

<details>
<summary>Cigna</summary>
  
### Controlled v/s Uncontrolled Component in React
**Controlled** <br>
It means that the component controls the input form, and all of its changes are completely driven by event handlers like setState(). Also, the component controls the render and keeps the data of form in the component state.

```
function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function onSubmit() {

    }    
    
    return (
        <form onSubmit={onSubmit}>
            <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <input type="submit" value="Submit" />
        </form>
    );
}

```
**Uncontrolled** <br>
uncontrolled components do not depend on any state of input elements or any event handler. This type of component does not care about real-time input changes.
```
function App() {
    function onSubmit() {
        console.log("Email value: " + window.email.value);
        console.log("Password value: " + window.password.value);
    }
    
    return (
        <form onSubmit={onSubmit}> 
            <input type="email" name="email" id="email" required />
            <input type="password" name="password" id="password" required />
            <input type="submit" value="Submit" />
        </form>
    );
}

```

</details>
