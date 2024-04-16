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
 
There are various ways to implement C# Dependency Injection:
- Constructor Dependency Injection.
- Property Dependency Injection.
- Method Dependency Injection.
 > https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection

#### Exception handling
A try block is used by C# programmers to partition code that might be affected by an exception. Associated catch blocks are used to handle any resulting exceptions. A finally block contains code that is run whether or not an exception is thrown in the try block, such as releasing resources that are allocated in the try block. A try block requires one or more associated catch blocks, or a finally block, or both.
> https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/exceptions/exception-handling

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
#### Difference between IQueryable vs IEnumerable
![image](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/9563228e-b634-4ff8-aa9c-109395c73f31)

#### Differences between ExpandoObject, DynamicObject and dynamic
The `dynamic` keyword is used to declare variables that should be late-bound. If you want to use late binding, for any real or imagined type, you use the dynamic keyword and the compiler does the rest.

`ExpandoObject` is a simple class which allows you to add members to an instance and use them dynamically.<br />
`DynamicObject` is a more advanced implementation which can be inherited to easily provide customized behavior.
```
dynamic expando = new ExpandoObject();
```
#### Shallow and Deep copy 
a shallow copy duplicates the structure of a collection, but not the elements. A deep copy duplicates everything.

`Shallow copy`<br />
Creates a new collection object and populates it with references. The reference types inside the original object remain shared between the original and the copied object.
To make a shallow copy of an array in C#, you can use the `Array.Clone()` method.
```
A ob1 = new A();
ob1.a = 10;
A ob2 = new A();
ob2 = ob1;

ob1.a = 5;
// <-- If you see value of ob2.a after this line, it will be 5.
```
`Deep copy`<br />
Creates a new object and then recursively populates it with copies of the original's child object. Each reference type in the original is also deeply copied. The copied object gets its own instances of each reference type.
```
 A ob1 = new A();
 ob1.a = 10;
 A ob2 = new A();
 ob2.a = ob1.a;

 ob1.a = 5;
// <-- If you see value of ob2.a after this line, it will be 10.
```
</details>

<details>
<summary>CBA</summary>

 #### Asynchronous programming 
 Asynchronous programming is a technique that allows a program to run a second set of instructions while focusing on its primary process. It enables a program to start a long-running task and still be responsive to other events while that task runs. Asynchronous programming is a `non-blocking architecture`, which means it doesn't block further execution while one or more operations are in progress. With async programming, multiple related operations can run concurrently without waiting for other tasks to complete. 

![image](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/399464fa-c824-4a5c-833b-31d110903070)

#### Middleware
![image](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/35ed0037-40ea-4c85-9d55-de6c34f663a2)

Middleware components for common app scenarios:

1. Exception/error handling
   - When the app runs in the Development environment:
      - Developer Exception Page Middleware `(UseDeveloperExceptionPage)` reports app runtime errors.
      - Database Error Page Middleware `(UseDatabaseErrorPage)` reports database runtime errors.
   - When the app runs in the Production environment:
      - Exception Handler Middleware `(UseExceptionHandler)` catches exceptions thrown in the following middlewares.
      -  HTTP Strict Transport Security Protocol (HSTS) Middleware `(UseHsts)` adds the Strict-Transport-Security header.
3. HTTPS Redirection Middleware `(UseHttpsRedirection)` redirects HTTP requests to HTTPS.
4. Static File Middleware `(UseStaticFiles)` returns static files and short-circuits further request processing.
5. Cookie Policy Middleware `(UseCookiePolicy)` conforms the app to the EU General Data Protection Regulation (GDPR) regulations.
6. Routing Middleware `(UseRouting)` to route requests.
7. Authentication Middleware `(UseAuthentication)` attempts to authenticate the user before they're allowed access to secure resources.
8. Authorization Middleware `(UseAuthorization)` authorizes a user to access secure resources.
9. Session Middleware `(UseSession)` establishes and maintains session state. If the app uses session state, call Session Middleware after Cookie Policy Middleware and before MVC Middleware.
10. Endpoint Routing Middleware `(UseEndpoints with MapRazorPages)` to add Razor Pages endpoints to the request pipeline.

    > https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-8.0
#### Custom middleware
Custom middleware in ASP.NET Core allows developers to run code before or after the request-response cycle.The custom middleware component is like any other .NET class with `Invoke()` method. However, to execute next middleware in a sequence, it should have RequestDelegate type parameter in the constructor.
```
using System.Globalization;

namespace Middleware.Example;

public class RequestCultureMiddleware
{
    private readonly RequestDelegate _next;

    public RequestCultureMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task Invoke(HttpContext context)
    {
     //code dealing with the request

     await _next(context);

     //code dealing with the response
   }
}

public static class RequestCultureMiddlewareExtensions
{
    public static IApplicationBuilder UseRequestCulture(
        this IApplicationBuilder builder)
    {
        return builder.UseMiddleware<RequestCultureMiddleware>();
    }
}
```
The middleware class must include:

1. A public constructor with a parameter of type `RequestDelegate`.
2. A public method named `Invoke` or `InvokeAsync`. This method must:
3. Return a `Task`.
   - Accept a first parameter of type `HttpContext`.
 > https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/write?view=aspnetcore-8.0

#### Response Caching Middleware
The middleware determines when responses are cacheable, stores responses, and serves responses from cache.
```
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddResponseCaching();

var app = builder.Build();

app.UseHttpsRedirection();

// UseCors must be called before UseResponseCaching
//app.UseCors();

app.UseResponseCaching();

// Controller
[HttpGet]
[ResponseCache(Duration = 180, Location = ResponseCacheLocation.Any)]
public IActionResult getCache()
{}
```

#### Map Extension
The Map extension method branches the request pipeline based on matches of the given request path. If the request path starts with the given path, the branch is executed. 
```
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.Use(async (context, next) =>
            {
                await context.Response.WriteAsync("Use Middleware Component \n");
                await next();
            });

            app.Map("/testmap", MapCustomMiddleware);

            app.Run(async context => {
                await context.Response.WriteAsync("Run Middleware Component\n");
            });
        }

        private void MapCustomMiddleware(IApplicationBuilder app)
        {
            app.Use(async (context, next) =>
            {
                await context.Response.WriteAsync("Specific URL Logic Middleware using Map Method \n");
            });
        }
    }
```
#### Tuple types
The tuples feature provides concise syntax to group multiple data elements in a lightweight data structure.
```
(double, int) t1 = (4.5, 3);
(string, string, string) LookupName(long id) // tuple return type
{
    ... // retrieve first, middle and last from data storage
    return (first, middle, last); // tuple literal
}
```
#### Delegate and event example
**Delegate**
```
using System;

namespace Delegates
{
    // Delegate Definition
    public delegate int operation(int x, int y);

    class Program
    {
        // Method that is passes as an Argument
        // It has same signature as Delegates
        static int Addition(int a, int b)
        {
            return a + b;
        }
        static int Multiple(int a, int b)
        {
            return a*b;
        }

        static void Main(string[] args)
        {
            // Delegate instantiation
            operation obj = new operation(Addition);
            operation[] objArr =
                     {
                      new operation(Addition),
                      new operation(Multiple)
                     };

            // output
            Console.WriteLine("Addition is={0}",obj(23,27));
            Console.WriteLine("Addition is={0}",objArr[1](23,27));
            Console.ReadLine();
        }
    }
}
```
**Event** <br />
Event Handlers can't return a value. They are always void.
```
using System;

namespace Delegates
{
    public delegate void DelEventHandler();

    class Program
    {
        public static event DelEventHandler add;

        static void Main(string[] args)
        {
            add += new DelEventHandler(USA);
            add += new DelEventHandler(India);
            add += new DelEventHandler(England);
            add.Invoke(); // or add(); both are same

            Console.ReadLine();
        }
        static void USA()
        {
            Console.WriteLine("USA");
        }

        static void India()
        {
            Console.WriteLine("India");
        }

        static void England()
        {
            Console.WriteLine("England");
        }
    }
}
```
> https://www.c-sharpcorner.com/UploadFile/84c85b/delegates-and-events-C-Sharp-net/

#### lock statement
When you synchronize thread access to a shared resource, lock on a dedicated object instance (for example, private readonly object balanceLock = new object();) or another instance that is unlikely to be used as a lock object by unrelated parts of the code.
```
private readonly object balanceLock = new object();
private decimal balance;
lock (balanceLock)
{
  if (balance >= amount)
  {
   balance -= amount;
   appliedAmount = amount;
  }
}
```
When accessing the balance always access inside lock 
> https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/lock

#### Singleton Design Pattern In C#
Always use sealed for singleton class
```
public sealed class Singleton2 {
    private Singleton2() {}
    private static readonly object lock = new object();
    private static Singleton2 instance = null;
    public static Singleton2 Instance {
        get {
            lock(lock) {
                if (instance == null) {
                    instance = new Singleton2();
                }
                return instance;
            }
        }
    }
}
```
> https://www.c-sharpcorner.com/UploadFile/8911c4/singleton-design-pattern-in-C-Sharp/

#### Difference Truncate and delete
The DELETE command is used to delete particular records from a table. The TRUNCATE command is used to delete the complete data from the table.
</details>

<details>
<summary>TCS</summary>
 
### 1st Round

#### What are the types of routing in ASP.NET MVC?
**Attribute routing**
It will be possible to use the Attribute Routing feature by placing a route on the action method or the controller.
```
[Route(“”)]
```
**Conventional routing**
Once a fresh ASP.net Core MVC application is created by making use of the default template, the app configures a default routing.The default route template is configured by MVC as
```
 {controller=Home}/{action=Index}/{id?}
```

### 2nd Round
#### What is use of singleton design pattern over static class?
 | Singleton Design Pattern  | Static Class |
| ------------- | ------------- |
| Singleton objects are stored in the heap	| static objects are stored in the stack. |
| We can clone a singleton object as long as the designer allows it	| we cannot clone a static class object. | 
| Singleton classes follow object-oriented programming (OOP) principles| 	static classes do not. | 
| We can implement an interface through a singleton class| 	not through the static methods of a class | 
| A singleton can be initialized lazily or asynchronously | a static class is generally initialized when it is first loaded |

#### Task Wait
Waits for the Task to complete execution.
```
public static void Main()
   {
      Task t = Task.Run( () => {
                           // Some operation
                         } );
     t.Wait();
   }
```

#### Difference between var and dynamic    
   | Var  | Dynamic |
| ------------- | ------------- |
| The compiler determines the variable's type at compile time.	| The compiler determines the variable's type during run-time. |
| This type of variable should be initialized when it is declared. As a result, the compiler will determine the type of the variable based on the value it was initialized with.	| This type of variable does not require initialization at the time of declaration. Because at compilation time, the compiler does not know the type of the variable. | 
| Throws an error if a variable is not initialized.	| 	There will be no error if the variable is not initialized. | 
| It can't be used to return values from a function or for properties. It can only be used as a function's local variable. | It can be used to return values from a function or for properties. |

#### What is symmantic Element?
A semantic element clearly describes its meaning to both the browser and the developer.Examples of non-semantic elements: <div> and <span> - Tells nothing about its content. Examples of semantic elements: <form> , <table> , and <article> - Clearly defines its content.

#### What is Psuedo class and use of that
A pseudo-class is a selector that selects elements that are in a specific state, e.g. they are the first element of their type, or they are being hovered over by the mouse pointer.

#### Can we create our own tag in html
Yes we can create 

> https://stackoverflow.com/questions/5682943/how-to-create-custom-tags-for-html

#### Autocomplete in html
autocomplete is attribute you can use in input, form and etc.

#### SOLID Principle
1. Single-Responsibility Principle
2. Open-Closed Principle
3. Liskov Substitution Principle - This means that every subclass or derived class should be substitutable for their base or parent class.
4. Interface Segregation Principle - A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use.
5. Dependency Inversion Principle - Entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the low-level module, but they should depend on abstractions.

</details>
