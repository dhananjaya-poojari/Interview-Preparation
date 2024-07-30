# Angular

### String Interpolation
String interpolation in Angular allows you to embed expressions in your HTML templates. It is a feature that Angular provides to bind data from the component to the view. Interpolations are defined using double curly braces `{{ }}`.
```
<div>
  <p>{{ getUserDetails() }}</p>
  <p>{{ user.age > 18 ? 'Adult' : 'Minor' }}</p>
  <p>{{ user.age * 2 }}</p>
</div>
```
- `{{ getUserDetails() }}`: Calls a method from the component and displays the result.
- `{{ user.age > 18 ? 'Adult' : 'Minor' }}`: Uses a ternary operator to display "Adult" if the user's age is greater than 18, otherwise "Minor".
- `{{ user.age * 2 }}`: Performs a mathematical operation on the user's age.
  
String interpolation in Angular is a powerful way to **dynamically update** the view based on the data in your component.
### Property and Event Binding
Property binding and event binding in Angular are mechanisms to communicate between the component and the DOM.
#### Property Binding
Property binding allows you to bind values to the properties of HTML elements. It is used to set the value of a property on an HTML element to the value of a property in the component.
```
<button [disabled]="isDisabled">Click me</button>
<img [src]="imageUrl" alt="Angular logo">
```
#### Event Binding
Event binding allows you to listen to events such as keystrokes, mouse movements, clicks, and touches, and respond to them with custom logic in the component.
```
<button (click)="handleClick($event)">Click me</button>
<input (input)="handleInput($event)">
```

### Two-Way Binding
Two-way binding combines property and event binding to keep the model and the view in sync. Angular provides ngModel directive to achieve this.
```
<input [(ngModel)]="name">
<p>Hello, {{ name }}!</p>
```
Let us same above if we do seperate event and property binding
```
export class AppComponent {
  name = 'Dhananjaya';

  onNameChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.name = inputElement.value;
  }
}

<input [value]="name" (input)="onNameChange($event)">
<p>Hello, {{ name }}!</p>

```
### Directives
1. Component Directives
2. Attribute Directives
3. Structural Directives
