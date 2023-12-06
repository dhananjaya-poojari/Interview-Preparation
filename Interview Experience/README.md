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
`Concurrent programming`<br />
Concurrent programming is a way of designing and writing programs that can execute multiple tasks or processes at the same time, without waiting for one to finish before starting another. Concurrent programs can use shared resources, such as memory, files, or network connections, but they need to coordinate and synchronize their access to avoid conflicts and errors. Concurrent programming can improve the performance, responsiveness, and scalability of programs, especially when dealing with multiple inputs, outputs, or users.<br />
`Parallel programming`<br />
Parallel programming is a subset of concurrent programming that focuses on exploiting the hardware capabilities of multicore processors, distributed systems, or specialized devices, such as GPUs or FPGAs, to run multiple tasks or processes simultaneously. Parallel programs can use shared or distributed resources, depending on the architecture and communication model. Parallel programming can increase the speed and efficiency of programs, especially when dealing with large or complex data sets, computations, or simulations.
> https://www.linkedin.com/advice/0/whats-difference-between-concurrent-parallel-programming
 #### Differences Between Scoped, Transient, And Singleton Service 
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
</details>
