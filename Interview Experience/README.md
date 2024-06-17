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
services.AddTransient<IGuidGenerator, GuidGenerator>();
```
3. Scoped <br />
Within a single request, the same instance will be used wherever it is injected. However, once the request ends, those instances will be disposed of.
A single instance of a resource is shared within a specific scope, such as an HTTP request. Scoped services are good for maintaining state or sharing data within a single request.
```
services.AddScoped<IAuthService,AuthService>();
```
> https://www.c-sharpcorner.com/article/differences-between-scoped-transient-and-singleton-service/
> https://mwaseemzakir.substack.com/p/ep-62-dependency-injection-explained?ref=dailydev
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

1. **Exception/error handling** :  This middleware is responsible for catching and handling exceptions that occur during the processing of a request.
   - When the app runs in the Development environment:
      - Developer Exception Page Middleware `(UseDeveloperExceptionPage)` reports app runtime errors.
      - Database Error Page Middleware `(UseDatabaseErrorPage)` reports database runtime errors.
   - When the app runs in the Production environment:
      - Exception Handler Middleware `(UseExceptionHandler)` catches exceptions thrown in the following middlewares.
      -  HTTP Strict Transport Security Protocol (HSTS) Middleware `(UseHsts)` adds the Strict-Transport-Security header.
3. HTTPS Redirection Middleware `(UseHttpsRedirection)` redirects HTTP requests to HTTPS.
4. **Static File Middleware `(UseStaticFiles)`** This middleware is responsible for serving static files, such as HTML, CSS, and JavaScript files, from the file system.
5. Cookie Policy Middleware `(UseCookiePolicy)` conforms the app to the EU General Data Protection Regulation (GDPR) regulations.
6. **Routing Middleware `(UseRouting)`**: This middleware is responsible for determining which endpoint should handle a particular request based on the request's path and method.

7. Authentication Middleware `(UseAuthentication)` attempts to authenticate the user before they're allowed access to secure resources.
8. Authorization Middleware `(UseAuthorization)` authorizes a user to access secure resources.
9. Session Middleware `(UseSession)` establishes and maintains session state. If the app uses session state, call Session Middleware after Cookie Policy Middleware and before MVC Middleware.
10. Endpoint Routing Middleware `(UseEndpoints with MapRazorPages)` to add Razor Pages endpoints to the request pipeline.

    > https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-8.0
#### Custom middleware
Custom middleware in ASP.NET Core allows developers to run code before or after the request-response cycle.The custom middleware component is like any other .NET class with `Invoke()` method. However, to execute next middleware in a sequence, it should have RequestDelegate type parameter in the constructor.
```
public class CustomMiddleware
{
    private readonly RequestDelegate _next;

    public CustomMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        // Code to execute before the next middleware
        Console.WriteLine("Custom Middleware: Incoming request");

        await _next(context); // Call the next middleware

        // Code to execute after the next middleware
        Console.WriteLine("Custom Middleware: Outgoing response");
    }
}

public static class RequestCultureMiddlewareExtensions
{
    public static IApplicationBuilder UseRequestCulture(
        this IApplicationBuilder builder)
    {
        return builder.UseMiddleware<CustomMiddleware>();
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
A semantic element clearly describes its meaning to both the browser and the developer.Examples of non-semantic elements: `<div>` and `<span>` - Tells nothing about its content. Examples of semantic elements: `<form>` , `<table>` , and `<article>` - Clearly defines its content.

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

<details>
<summary>Empyra</summary>

### 1st Round
#### Garbage Collection in .Net
The garbage collector manages the allocation and release of memory for an application. Therefore, developers working with managed code don't have to write code to perform memory management tasks.The GC.Collect method is called. In almost all cases, you don't have to call this method because the garbage collector runs continuously.<br>
Also we can use `IDisposable` Interface for releasing unmanaged resources. We should call/create a object with `using` statement it will trigger dispose method.
We can achieve `using` is basically the equivalent of:
```
var con = new Connection();
    try {
        con.Open()
        //do whatever
    } finally {
        if (con != null) con.Dispose();
    }
```
So it also has the benefit of calling Dispose() even if an unhandled exception is thrown in the code within the block.

#### Difference between throw and throw ex
**throw ex** resets the stack trace (so your errors would appear to originate from HandleException)

**throw** doesn't - the original offender would be preserved.
#### Fourth highest in SQL table
```
select salary from Employee order by salary desc limit 1 offset 4;
```

### 2nd Round
#### How is it possible to create an object from the abstract class?
```
namespace ConsoleApplication1
{
    public class Circle : Shape
    {
        public override void Draw()
        {
            Console.WriteLine("Draw a Circle");
        }
    }

    public abstract class Shape
    {    
        public abstract void Draw();
    }
}
```
You can do like this
```
class Program
{
    static void Main(string[] args)
    {       
        Shape v;
        v = new Circle();
        v.Draw();
    }
}
```
#### Multicast Delegate
```
using System;

delegate void CustomCallback(string s);

class TestClass
{
    static void Hello(string s)
    {
        Console.WriteLine($"  Hello, {s}!");
    }

    static void Goodbye(string s)
    {
        Console.WriteLine($"  Goodbye, {s}!");
    }

    static void Main()
    {
        CustomCallback hiDel, byeDel, multiDel, multiMinusHiDel;

        // Initialize the delegate object hiDel that references the
        hiDel = Hello;

        // Initialize the delegate object byeDel that references the
        byeDel = Goodbye;

        // The two delegates, hiDel and byeDel, are combined to
        multiDel = hiDel + byeDel;

        // Remove hiDel from the multicast delegate, leaving byeDel,
        // which calls only the method Goodbye.
        multiMinusHiDel = multiDel - hiDel;

        Console.WriteLine("Invoking delegate hiDel:");
        hiDel("A");
        Console.WriteLine("Invoking delegate byeDel:");
        byeDel("B");
        Console.WriteLine("Invoking delegate multiDel:");
        multiDel("C");
        Console.WriteLine("Invoking delegate multiMinusHiDel:");
        multiMinusHiDel("D");
    }
}
```
#### Status Code
#### 1xx: Informational
- **100 Continue**: Indicates that the initial part of a request has been received and the client should continue with the request.
- **101 Switching Protocols**: Informs the client that the server is switching protocols as requested by the client.

#### 2xx: Success
- **200 OK**: The request was successful, and the server returned the requested resource.
- **201 Created**: The request was successful, and a new resource was created as a result.
- **202 Accepted**: The request has been accepted for processing, but the processing is not complete.
- **204 No Content**: The request was successful, but there is no content to send in the response.

#### 3xx: Redirection
- **301 Moved Permanently**: The requested resource has been moved to a new URL permanently.
- **302 Found**: The requested resource has been temporarily moved to a different URL.
- **304 Not Modified**: The resource has not been modified since the last request.

#### 4xx: Client Errors
- **400 Bad Request**: The server could not understand the request due to invalid syntax.
- **401 Unauthorized**: Authentication is required and has failed or has not been provided.
- **403 Forbidden**: The server understood the request but refuses to authorize it.
- **404 Not Found**: The requested resource could not be found on the server.
- **405 Method Not Allowed**: The request method is known by the server but is not supported by the target resource.

#### 5xx: Server Errors
- **500 Internal Server Error**: The server encountered an unexpected condition that prevented it from fulfilling the request.
- **501 Not Implemented**: The server does not support the functionality required to fulfill the request.
- **502 Bad Gateway**: The server, while acting as a gateway or proxy, received an invalid response from the upstream server.
- **503 Service Unavailable**: The server is not ready to handle the request, often due to maintenance or overload.
  
#### use strict in JS file
The "use strict" directive enables JavaScript's strict mode. JavaScript's strict mode was introduced in ECMAScript 5. It enforces stricter parsing and error handling on the code at runtime. It also helps you write cleaner code and catch errors and bugs that might otherwise go unnoticed.

### 3rd Round
#### Normalization in SQL
Normalization is the process of organizing data in a database. It includes creating tables and establishing relationships between those tables according to rules designed both to protect the data and to make the database more flexible by eliminating redundancy and inconsistent dependency.

> https://learn.microsoft.com/en-us/office/troubleshoot/access/database-normalization-description#normalizing-an-example-table
#### Group by rules
1.**HAVING Clause**:
   - Use the `HAVING` clause to filter groups based on aggregate calculations.
   - It is similar to the `WHERE` clause but is used for aggregate data.
     
2.**Column Selection**:
   - You can only select columns that are included in the `GROUP BY` clause or aggregate functions.
     
3.**Order of Columns**:
   - The order of columns in the `GROUP BY` clause matters if you're expecting a specific grouping hierarchy.
</details>

<details>
<summary>Alphastream</summary>

#### Mutex vs Semaphore

| Feature      | Mutex                                                                                 | Semaphore                                                                                   |
|--------------|---------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| **Purpose**  | Ensures that only one thread can access a resource at a time.                         | Controls access to a resource that has a limited number of instances.                       |
| **Ownership**| Only the thread that locked the mutex can unlock it.                                  | Can be incremented or decremented by any thread, not necessarily the one that decremented it. |
| **Usage**    | Typically used to protect critical sections of code from concurrent access.           | Often used to manage access to a pool of resources, like a fixed number of database connections. |
| **Analogy**  | A key to a single-occupancy restroom—only one person can use it at a time, and only that person can unlock the door after use. | A ticket system for a multi-stall restroom with a limited number of stalls; anyone with a ticket can use an available stall. |

</details>

<details>
<summary>Deloitte</summary>

#### What is the best strategy to sync data between DB and redis cache?
Caches are sync'd in two common ways:

1. **Data cached with expiration:** Once cached data has expired, a background process adds fresh data to cache, and so on. Usually there's data that will be refreshed in different intervals: 10 minutes, 1 hour, every day.
2. **Data cached on demand:** When an user requests some data, that request goes through the non-cached road, and that request stores the result in cache, and a limited number of subsequent requests will read cached data directly if cache is available. This approach can fall into #1 one too in terms of cache invalidation interval.

Problem from dynamic/static perspective:

1. **Real/Time approach:** each time a process changes the DB data, you dispatch an event or a message to a queue where a worker handles corresponding indexing of the cache. Some might event implement it as a DB Trigger (I don't like)
2. **Static/delayed approach:** Once a day/hour/minute.. depending on your needs there is a process that does a batch/whole indexing of the DB data to the cache.
#### How controller will validate request body (Model.IsValid)
The `ModelState.IsValid` property will be true if the values were able to bind correctly to the model AND no validation rules were broken in the process.
```
if (!ModelState.IsValid)
{
  return Page();
}

```

#### Difference Between .NET Core and .NET Framework

| Feature                | .NET Core                                                                   | .NET Framework                                                               |
|------------------------|-----------------------------------------------------------------------------|------------------------------------------------------------------------------|
| **Platform**           | Cross-platform (Windows, Linux, macOS)                                       | Windows only                                                                 |
| **Performance**        | Generally faster and more efficient                                          | Comparatively slower                                                          |
| **Deployment Model**   | Self-contained deployments and side-by-side versioning                       | System-wide versioning and shared framework                                  |
| **Microservices**      | Better support for microservices and containers                              | Limited support for microservices and containers                             |
| **API Compatibility**  | Does not support all .NET Framework APIs, focuses on modern development      | Full support for all .NET APIs                                               |
| **Development**        | Ideal for new applications and modernizing existing applications             | Typically used for existing applications and those that rely on Windows-specific features |
| **Release Cycle**      | Rapid release cycle with new features and improvements                       | Slower release cycle, primarily for bug fixes and security patches           |
| **Tooling**            | Supported by Visual Studio, Visual Studio Code, and command-line tools       | Primarily supported by Visual Studio                                         |
| **Open Source**        | Fully open-source and community-driven                                       | Partially open-source                                                        |
</details>

<details>
<summary>First American India</summary>

#### ConfigureAwait in C#
`ConfigureAwait` is a method in C# used to configure how an `await` operation behaves in terms of capturing the current synchronization context. It is especially important in asynchronous programming to avoid potential deadlocks and improve performance.

The `ConfigureAwait` method is used after an `await` expression to specify whether to continue executing the remainder of the async method on the original context captured by the `await`.
#### What is ‘CORS’? What is it used for?
Cross-Origin Resource Sharing (CORS) is a security feature implemented by web browsers that allows or restricts web applications running at one origin (domain) from accessing resources from a different origin. This mechanism is crucial for web security and helps prevent malicious behavior such as cross-site request forgery (CSRF).

When a web application makes a request to a different origin (e.g., a different domain, protocol, or port), the browser sends an HTTP request with an `Origin` header. The server can then respond with specific headers to indicate whether the request is allowed.
#### useReducer in React
useReducer is a React Hook that lets you add a reducer to your component.
> https://react.dev/reference/react/useReducer#usage
#### app.use in .Net Core
In .NET Core, middleware components are used to handle requests and responses in the application pipeline. The `app.Use` method is one of the ways to add middleware to the request processing pipeline in an ASP.NET Core application.

```
app.Use(async (context, next) =>
{
  // Code to execute before the next middleware
  Console.WriteLine("Incoming request: " + context.Request.Path);

  await next.Invoke(); // Call the next middleware

  // Code to execute after the next middleware
  Console.WriteLine("Outgoing response: " + context.Response.StatusCode);
});
```
Explanation
- Anonymous Function: app.Use takes an anonymous function with two parameters: context and next.
context: Represents the HTTP context for the request.
- next: A delegate to invoke the next middleware in the pipeline.
- Before Next: Code executed before calling next.Invoke() runs before the next middleware.
- After Next: Code executed after next.Invoke() runs after the next middleware has completed processing.
#### Worker Process in .Net
A `Worker Service` is also a real process, but is intended as a background service for a front-end application; it starts with the application and stops with the application.

Worker processes provide the execution environment for all web sites and applications configured in IIS.

Now each pool can have one or more worker process. Each worker process is a different program that's run your site, have their alone static variables, they different start stop calls etc. Different worker process are not communicate together, and the only way to exchange data is from common files or a common database. If you have more than one worker process and one of them make long time calculations, then the other can take care to handle the internet calls and show content.

> https://stackoverflow.com/questions/14105345/iis-app-pools-worker-processes-app-domains
#### Application pool
An Application Pool in IIS (Internet Information Services) is a feature that isolates web applications for better security, reliability, availability, and performance. By using application pools, you can ensure that applications run independently of each other.

Many application domains (sites) can have the same application pool, and because they have the same application pool they run under the same processes, and under the same account - and they have the same settings of the pool. If this pool restarts, then all sites under that pools restarts.

#### App domain
In a server you can have many asp.net sites that runs together. Each one site is an app domain.
![image](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/c4519c17-0162-4cfc-8650-7aec668830a3)

#### What is advantage of microservice architeture over monolithic architecture?
| **Aspect**                   | **Monolithic Architecture**                         | **Microservice Architecture**                      |
|------------------------------|-----------------------------------------------------|---------------------------------------------------|
| **Codebase**                 | Single codebase                                     | Multiple codebases                                 |
| **Deployment**               | Unified deployment                                  | Independent deployment                             |
| **Coupling**                 | Tightly coupled                                     | Loosely coupled                                    |
| **Scalability**              | Scalability of the whole application                | Independent scaling of services                    |
| **Technology Stack**         | Uniform technology stack                           | Flexibility to use different technologies          |
| **Fault Isolation**          | Failure in one component can affect the entire app  | Failures are isolated to individual services       |
| **Development Speed**        | Slower due to large codebase and dependencies       | Faster, as teams can work on different services independently |
| **Maintenance**              | More complex due to interdependencies               | Easier due to isolated services                    |
| **Deployment Speed**         | Slower due to the need to deploy the entire application | Faster, as services can be deployed independently   |
| **Team Structure**           | Large, cross-functional teams                       | Small, focused teams                                |
#### What is a database cluster? 
</details>



<details>
<summary>Auto Desk</summary>
 
#### What is REST Api?
REST (Representational State Transfer) API is an architectural style for building web services that provide a standardized way of interacting with data and resources over the internet using HTTP protocols. A REST API is a type of web service that adheres to the principles of the REST architectural style.
The key characteristics of a REST API are:
- Resource-based: The API exposes a set of resources, which can be identified by unique URIs (Uniform Resource Identifiers). These resources represent the data or functionality that the API provides.
- Stateless: Each request from the client to the server must contain all the necessary information to understand and process the request. The server does not store any client context between requests.
- Uniform interface: The API uses a consistent set of HTTP methods (GET, POST, PUT, DELETE, etc.) to perform CRUD (Create, Read, Update, Delete) operations on the resources.
Representation-based: The client and server exchange representations of resources, typically in formats like JSON or XML, rather than exchanging raw data.
- Hypermedia-driven: The API should provide links and metadata within the responses, allowing clients to discover and navigate the available resources dynamically.
</details>

<details>
<summary>Hy-Vee</summary>
 
#### What is Extension Methods?
C# extension method is a static method of a static class, where the "this" modifier is applied to the first parameter.
```
public static class StringExtensions
{
    public static string ToTitleCase(this string str)
    {
        if (string.IsNullOrEmpty(str))
            return str;
        string[] words = str.Split(' ');
        for (int i = 0; i < words.Length; i++)
        {
            if (words[i].Length > 0)
            {
                words[i] = char.ToUpper(words[i][0]) + words[i].Substring(1);
            }
        }
        return string.Join(" ", words);
    }
}

```
In this example, the StringExtensions class contains a static method called `ToTitleCase` that takes a string as its parameter and returns the string in title case.
The this keyword in the method signature `public static string ToTitleCase(this string str)` indicates that this method is an extension method for the string type.
```
string myString = "the quick brown fox jumps over the lazy dog";
string titleCaseString = myString.ToTitleCase(); // "The Quick Brown Fox Jumps Over The Lazy Dog";
```
#### Microtask Queue and Callback Queue
![image](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/aca0208e-4aa6-4c2f-8f40-209d4a247e23)

</details>

<details>
<summary>Ivanti</summary>

#### Why RDS over SQL Server?
Amazon RDS is a fully managed service that makes it easy to set up, operate, and scale a relational database in the cloud. It supports a variety of database engines such as MySQL, MariaDB, PostgreSQL, Oracle, and Microsoft SQL Server. At the same time Microsoft SQL Server supports only it’s own database engine that can be run on-premises or in the cloud. When we want to scale we can increase storage of RDS but SQL server need to increase the EC2 storage so RDS is cost efficient.
#### What is Reflection in C#?

#### How username and password is maintained in OAuth 2.0?
![image](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/7dac04f9-899c-41c7-8d57-8e35e487c41f)

</details>

<details>
<summary>h & M</summary>

#### Difference between FirstOrDefault and SingleOrDefault
FirstOrDefault: Returns the first element of a sequence, or a default value if no element is found. <br/>
SingleOrDefault: Returns the only element of a sequence, or a default value if the sequence is empty; this method throws an exception if there is more than one element in the sequence.

#### Difference between Convert.ToString() and ToString()
`Convert.ToString()` handles null, while `ToString()` doesn't, and throws a NULL Reference exception.
```
object obj = null;
string result = Convert.ToString(obj); // result will be ""

object obj = null;
string result = obj.ToString(); // Throws NullReferenceException
```
#### How to stop upgrading reference type when passing a method?
1. Pass a clone of the object.
2. Use immutable objects.(record type)
3. Use read-only collections for collections.
```
ReadOnlyCollection<int> readOnlyList = new ReadOnlyCollection<int>(originalList);
```

</details>

<details>
<summary>STG Partners</summary>

#### What Poly in .Net?
#### What is Parallel.ForEach?


</details>

