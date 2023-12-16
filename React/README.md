# React Interview Preparation

### Table of Contents
<details>
<summary>Basic Concepts</summary>

 1. [Why Is React a Library?](#why-is-react-a-library)
 2. [Virtual DOM](#virtual-dom)
 4. [Difference between state and props](#difference-between-state-and-props)
 5. [React Context](#react-context)
 6. [Difference between useMemo and useCallback](#difference-between-usememo-and-usecallback)
</details>

<details>
<summary>Core Concepts</summary>

 1. [Reconciliation Algorithm](#reconciliation-algorithm)
 2. [Props Drilling](#props-drilling)
 3. [Higher-Order Components](#higher-order-components)
 4. [How React Life cycle works?](#how-react-life-cycle-works)
 5. [Lifecycle of a React Function component](#lifecycle-of-a-react-function-component)
</details>

### Why Is React a Library?
React is a JavaScript library used to build reactive websites. While it's not a framework, React does have a dedicated framework called Create React App, which can be used for building web applications. React can be utilized through CDN files; there is no strict requirement to use npm for incorporating React into your projects.

### Virtual DOM
React JS Virtual DOM is an in-memory representation of the DOM. When the state of a React component changes, React creates a new virtual DOM tree. It then compares the new virtual DOM tree to the old virtual DOM tree. This process is called "diffing". React only updates the real DOM when there are differences between the two virtual DOM trees.

### Reconciliation Algorithm
The reconciliation algorithm is a set of rules that React uses to update the DOM in response to changes in the component state.The algorithm compares the current component tree with the new one, calculates the differences, and then updates the actual DOM. <br />

![image](https://github.com/dhananjaya-poojari/ReactJS/assets/77887564/9386f550-7c4c-438a-8ab4-15e2149fbba9)
 #### React Fiber Architecture
 At a high level, the Fiber architecture is a new way of reconciling the virtual DOM in React. Reconciliation is the process by which React determines what changes need to be made to the UI based on changes to the application state.The Fiber reconciler, which became the default reconciler for React 16 and above.

### How React Life cycle works?
#### Component Mounting Phase
The Mounting Phase begins when a component is first created and inserted into the DOM. 
```
constructor() => render() => componentDidMount()
```
The `constructor()` method is called when the component is first created. You use it to initialize the component's state and bind methods to the component's instance. <br />
The `render()` method is responsible for generating the component's virtual DOM representation based on its current props and state. It is called every time the component needs to be re-rendered, either because its props or state have changed, or because a parent component has been re-rendered.<br />
The `componentDidMount()` method is called once the component has been mounted into the DOM. It is typically used to set up any necessary event listeners or timers, perform any necessary API calls or data fetching, and perform other initialization tasks that require access to the browser's DOM API.

#### Component Updating Phase
The Updating Phase occurs when a component's state or props change.
```
shouldComponentUpdate() => componentDidUpdate() => render() => componentDidUpdate()
```
The `shouldComponentUpdate()`  method is called before a component is updated. It takes two arguments: nextProps and nextState. This method returns a boolean value that determines whether the component should update or not. If this method returns true, the component will update, and if it returns false, the component will not update.<br />
`componentWillUpdate()` is a lifecycle method in React that gets called just before a component's update cycle starts. It receives the next prop and state as arguments and allows you to perform any necessary actions before the component updates.<br />
The `componentDidUpdate()` method is a lifecycle method in React that is called after a component has been updated and re-rendered. It is useful for performing side effects or additional operations when the component's props or state have changed.

#### Component Unmounting Phase
Unmounting Phase occurs when a component is removed from the DOM.
```
componentWillUnmount()
```
> https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

### Difference between state and props
 | Props | State |
| ------------- | ------------- |
| Props are used to pass data from a parent component to a child component.	| State is used to manage data within a component. |
| Props are immutable and cannot be changed within a component | State is mutable and can be updated using the setState function. |
| Props are passed down from the parent component and are read-only within the child component | State is only accessible within the component where it is defined. |
| Props can be used to customize the behavior or appearance of a component | state is used to keep track of information that can change over time. |
> https://www.linkedin.com/pulse/understanding-difference-between-props-state-react-basit-ch/

### Props Drilling 
Prop drilling is the process of passing down data or state through multiple layers of a component hierarchy. By the way, it refers to the practice of passing data from a parent component to its children and then from the children to their own children and so on, until the data reaches the desired component that needs it.

### React Context
To access data from anywhere in the app, React developers use the React Context API.
When the page refreshes or when a user navigates to another page within the application, React Context data will be retained.<br />
#### createContext
`createContext` lets you create a context that components can provide or read.
```
import { createContext } from 'react';

const SomeContext = createContext(defaultValue); // Default value can object, array or variable
const UserContext = createContext({
  user: {
    name: "Dummy user",
    email: "dummyemail@gmail.com",
  },
});
```
#### SomeContext.Provider
Wrap your components into a context provider to specify the value of this context for all components inside:
```
const [user, setUser] = useState({
    name: "Robin Singh",
    email: "44robin.rs@gmail.com",
  });
  return (
    <>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
       ///...
      </UserContext.Provider>
    </>
  );
```
If we access the `UserContext` within the `UserContext.Provider`, the user's name and email will be "Robin Singh" and "44robin.rs@gmail.com," not the dummy user.
#### useContext
useContext is a React Hook that lets you read and subscribe to context from your component.
```
  const { user } = useContext(UserContext);
```
> Chapter 13 - Data is the new Oil 01:56:00

### Difference between useMemo and useCallback
 | useMemo | useCallback |
| ------------- | ------------- |
|```const memo= React.useMemo(()=>"useMemo")) console.log(memo) // Prints useMemo```|```const callback = React.useCallback(()=>"useCallback")) console.log(callback) // Prints function defination```|
|`useMemo` is a React Hook that lets you cache the result of a calculation between re-renders. | `useCallback` is a React Hook that lets you cache a function definition between re-renders. |
|helping to optimize expensive calculations or data transformations.|reducing unnecessary re-creation of functions and optimizing component re-renders.|
|returns the memoized value itself.|returns the memoized callback function itself.|
|Use `useMemo` when you want to optimize and cache the result of a computation that depends on certain inputs.|Use `useCallback` when you want to optimize the creation of callback functions that are passed to child components.|
|https://react.dev/reference/react/useMemo|https://react.dev/reference/react/useCallback|

### Higher-Order Components
A higher-order component (HOC) is a function that takes a component as an argument and returns a new component. HOCs allow you to add additional functionality to a component without modifying the component's code.
```
const withLogging = (Component) => {
  return (props) => {
    console.log('Rendering component', Component.name);
    return <Component {...props} />;
  };
};
const Button = (props) => {
  return <button>{props.children}</button>;
};


const LoggedButton = withLogging(Button);
```
### Lifecycle of a React Function component
There are 3 phases in the React Component LifeCycle
1. Mounting Phase<br>
During the mounting phase, a functional component is being created and added to the DOM. In this phase, you typically initialise state and perform any setup that's needed when the component is first rendered.<br />
useEffect : The useEffect hook with an empty dependency array simulates the `componentDidMount` lifecycle method. It runs the provided function after the component is first rendered. This is a good place to perform data fetching or initial setup.
```
useEffect(() => {
///...
},[])
```
2. Updating Phase <br />
In the updating phase, the functional component is re-rendered due to changes in its props or state. You can use the useEffect hook without an empty dependency array to achieve behaviour similar to `componentDidUpdate`.
```
useEffect(() => {
///...
})
```
3. Unmounting Phase <br />
In the unmounting phase, the functional component is being removed from the DOM. The cleanup function in the useEffect hook simulates the behaviour of `componentWillUnmount`.
```
useEffect(() => {
///...
return ()=>{
///...
}
})
```
> https://www.linkedin.com/pulse/react-functional-component-lifecycle-manikandan-b/

### Explain what React Fragments are and why they are useful
React Fragments are a way to group elements in a React component without adding extra nodes to the DOM. This can be useful when you want to return multiple elements from a component, but you don't want them to be wrapped in an extra div.
```
const MyComponent = () => {
  return (
    <>
      <h1>This is a heading</h1>
      <p>This is a paragraph</p>
    </>
  );
};
```
### Explain the role of React Router in building single-page applications (SPAs) with React
React Router is a JavaScript library that helps developers create routing in React applications. It allows developers to define routes and handle navigation between different components in their application. React Router is especially useful for building single-page applications (SPAs), which are web applications that load a single HTML page and dynamically update that page as the user interacts with the application.

Here are some of the benefits of using React Router to build SPAs:
1. Improved user experience:
SPAs can provide a more seamless and responsive user experience than traditional multi-page applications, as there is no need to load a new page for each navigation event.
1. Reduced development time:
React Router can help developers save time by providing a built-in routing mechanism that they can use to implement navigation in their applications.
