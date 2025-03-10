// 1. Implement a function that serializes a Javascript value into a JSON string.

// 2. Implement a function that performs a deep copy of a value, but also handles circular references.
function deepCopy(value) {
  // Check if the value is an object or array, and not null
  if (typeof value !== "object" || value === null) {
    return value; // Return the value if it's not an object or array
  }

  // Handle arrays
  if (Array.isArray(value)) {
    const newArray = [];
    for (let i = 0; i < value.length; i++) {
      newArray[i] = deepCopy(value[i]);
    }
    return newArray;
  }

  // Handle objects
  const newObject = {};
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      newObject[key] = deepCopy(value[key]);
    }
  }
  return newObject;
}

// 3. Implement a function that determines if two values are deep equal.
function DeepCompare(object1, object2) {
  if (object1 === object2) {
    return true;
  }
  if (typeof object1 === "object" && typeof object2 === "object") {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length === keys2.length) {
      for (let i = 0; i < keys1.length; i++) {
        if (!DeepCompare(object1[keys1[i]], object2[keys2[i]])) return false;
      }
      return true;
    }
  }
  return false;
}

// 4. Implement the functionality behaviour of Promise.any

// 5. Implement the functionality behaviour of Promise.allSettled

// 6. Implement a function that returns a memoized version of a function which accepts a single argument.

// 7. Implement a function that deserializes a JSON string into a Javascript value.

// 8. Implement a class that can subscribe to and emit events that trigger attached callback functions.

// 9. Implement a debounce function that comes with a cancel method to cancel delayed invocations.

// 10. Implement a function that recursively flattens an array into a single level deep.

// 11. Implement a promisify function that allows the original function to override the return value.

// 12. Implement a function to execute N async tasks in series.

// 13. Implement a function to execute N async tasks in parallel.

// 14. Implement a function to execute N async tasks in race.

// 15. Implement a pipe function which chains N number of functions.

// 16. Implement negative indexing in Array using Proxies.

// 17. Implement Lodash _.get method which gets value from the path.

// 18. Implement your custom version of the call method which sets the "this" context.

// 19. Implement throttling of promises which throttles API requests to max limit.

// 20. Implement memoizing or caching identical API requests.

// 21. Implement a curried function with placeholders support.

// 22. Implement a custom polyfill version of Object.assign

// 23. Implement custom Virtual DOM I which serializes the data in valid javascript objects.

// 24. Implement custom Virtual DOM II which deserializes the data.

// 25. Implement a custom polyfill function memoize from the Lodash library.

// 26. Imlpement a custom String Tokenizer.

// 27. Implement a custom function _.chunk() which chunks the arrays from Lodash Library.

// 28. Implement the polyfills for the call, apply, bind methods from scratch.

// 29. Implement a throttle function that comes with a cancel method to cancel delayed invocations.

// 30. Write a custom polyfill for typeof operator which returns the correct typeof for the Javascript value.
