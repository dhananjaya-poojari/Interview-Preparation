# Interview Experience

<details>
<summary>Just Answer</summary>

 #### Difference between Hashtable and Dictionary
 A **dictionary** is a general concept that maps keys to values. <br />
 ```
var customers = new Dictionary<string, Customer>();
...
Customer customer = customers["Ali G"];
```
 A **hash table** is a data structure that maps keys to values by taking the hash value of the key (by applying some hash function to it) and mapping that to a bucket where one or more values are stored.
 ```
var customers = new Hashtable();
...
Customer customer = customers["Ali G"] as Customer;
```
 | Dictionary  | Hashtable |
| ------------- | ------------- |
| Needs own thread synchronization	| Offers thread safe version through Synchronized() method |
| Enumerated item: KeyValuePair	| Enumerated item: DictionaryEntry | 
| Newer (> .NET 2.0)| 	Older (since .NET 1.0) | 
| is in System.Collections.Generic| 	is in System.Collections | 
| Request to non-existing key throws exception | 	Request to non-existing key returns null |
| potentially a bit faster for value types |	bit slower (needs boxing/unboxing) for value types |

 #### Middleware
 Middleware is software that different applications use to communicate with each other.Middleware offers a standard Application Programming Interface (API) to manage the required input and output of data from the component. The internal linking with the component is hidden from the user. Developers use the APIs to request the services that they need from the software components. 
 Example:<br />
 1. **API (application programming interface)** middleware
  Provides tools developers can use to create, expose and manage APIs for their applications.
1. **Remote procedure call (RPC) middleware**
Allows one application to trigger a function in another application, whether they reside in the same network.
1. **Database middleware** : ODBC, JDBC and transaction processing monitors
 #### Dependecy Injection
 Dependency injection aims to separate the concerns of constructing objects and using them, leading to loosely coupled programs.The pattern ensures that an object or function which wants to use a given service should not have to know how to construct those services.
 >https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection
</details>

<details>
<summary>VeARC</summary>

 #### Paralell programming and Concurrent Programming
##### Concurrent programming
Multiple processes are executed during a period of time.<br />
Examples:
1. Threading: Used in C# to achieve concurrency
1. Event loop: Used in JavaScript to coordinate the order in which instructions are executed<br />
##### Parallel programming
 Multiple tasks or subtasks of the same task run at the same time <br />
Examples:
1. Multitasking: Used in Python to achieve parallelism
2. Multicore or distributed systems: Required for parallel programs

   ![image](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/101308c1-b65e-4b4a-b459-57712246c269)

> https://www.linkedin.com/advice/0/whats-difference-between-concurrent-parallel-programming
 #### Differences Between Scoped, Transient, And Singleton Service or Three service lifetimes available with the Microsoft Dependency Injection container
 Service lifetimes define the conditions under which a service instance is created and disposed of.
1. Singleton <br />
A single instance of a resource that is shared across the application. Singleton services are good for objects that are expensive to create or need to maintain global state. They can also be used for logging services, feature flags, and email services.
```
services.AddSingleton<ILoggingService, LoggingService>();
```
2. Transient <br />
A new instance of a resource is created each time it's requested. Transient services are good for lightweight services with little or no state.
```
services.AddTransient<ICronJobService,CronJobService>();
```
3. Scoped <br />
A single instance of a resource is shared within a specific scope, such as an HTTP request. Scoped services are good for maintaining state or sharing data within a single request.
```
services.AddScoped<IAuthService,AuthService>();
```
 > https://www.c-sharpcorner.com/article/differences-between-scoped-transient-and-singleton-service/
 #### Abstract Class
The abstract modifier indicates that the thing being modified has a missing or incomplete implementation. 
```
abstract class Shape
{
    public abstract int GetArea();
}

class Square : Shape
{
    private int _side;

    public Square(int n) => _side = n;

    // GetArea method is required to avoid a compile-time error.
    public override int GetArea() => _side * _side;

    static void Main()
    {
        var sq = new Square(12);
        Console.WriteLine($"Area of the square = {sq.GetArea()}");
    }
}
```
 #### Thread and Task 
 **Task** <br />
 Tasks class to let you create tasks and run them asynchronously.A task is an object that represents some work that should be done. The task can tell you if the work is completed and if the operation returns a result, the task gives you the result.< br />
 Example: Basically, a Task<T> "promises" to return you a T, but not right now honey, I'm kinda busy, why don't you come back later?<br />
 **Thread**<br />
  A Thread is a small set of executable instructions.When the time comes when the application is required to perform few tasks at the same time.A thread is one of the many possible workers which performs that task.
 > https://stackoverflow.com/questions/4130194/what-is-the-difference-between-task-and-thread
 #### Generics in C#
Generics in C# is a feature that allows users to create reusable code. It enables users to create classes, methods, and interfaces that work with different data types without explicitly defining the data type.
```
// Declare the generic class.
public class GenericList<T>
{
    public void Add(T input) { }
}
class TestGenericList
{
    private class ExampleClass { }
    static void Main()
    {
        // Declare a list of type int.
        GenericList<int> list1 = new GenericList<int>();
        list1.Add(1);

        // Declare a list of type string.
        GenericList<string> list2 = new GenericList<string>();
        list2.Add("");

        // Declare a list of type ExampleClass.
        GenericList<ExampleClass> list3 = new GenericList<ExampleClass>();
        list3.Add(new ExampleClass());
    }
}
```
> https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/generics
 #### Attribute Routing in ASP.NET MVC
 Attribute routing is a feature in ASP.NET Core MVC that allows users to define routes directly on their controller and action methods.
 > https://learn.microsoft.com/en-us/aspnet/web-api/overview/web-api-routing-and-actions/attribute-routing-in-web-api-2
### 2nd Round
#### Difference between iqueryable vs ienumerable
#### Differences between ExpandoObject, DynamicObject and dynamic
#### Shallow and Deep copy 

</details>
