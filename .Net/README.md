# .Net

### Locking Mechanism in C#
#### Lock
  ```
private Object thisLock = new Object();
lock (x)
{
    // We still have the lock - because locks are reentrant.
}
```
#### Semaphore
A semaphore is a synchronization primitive used to manage concurrent access to shared resources. It is commonly used in multi-threaded or multi-process environments to prevent race conditions and ensure proper resource allocation.
```
class Program
{
    static Semaphore semaphore = new Semaphore(3, 3); // Allows up to 3 threads to enter
    static void Main()
    {
        for (int i = 1; i <= 5; i++)
        {
            new Thread(AccessResource).Start(i);
        }
    }
    static void AccessResource(object id)
    {
        Console.WriteLine($"Thread {id} waiting to enter...");
        semaphore.WaitOne(); // Wait (decrement the count)

        Console.WriteLine($"Thread {id} entered.");
        Thread.Sleep(2000); // Simulate work

        Console.WriteLine($"Thread {id} leaving.");
        semaphore.Release(); // Signal (increment the count)
    }
}
```
#### SemaphoreSlim

`SemaphoreSlim` is a lightweight alternative to the traditional `Semaphore` in .NET. It provides a simpler and more efficient way to manage concurrent access to a limited number of resources, particularly in scenarios where a lighter synchronization primitive is sufficient.
```
class Program
{
    static SemaphoreSlim semaphoreSlim = new SemaphoreSlim(3, 3); // Allows up to 3 threads to enter

    static async Task Main(string[] args)
    {
        for (int i = 1; i <= 5; i++)
        {
            int threadId = i;
            Task.Run(() => AccessResource(threadId));
        }

        await Task.Delay(10000); // Wait for all tasks to complete
    }

    static async Task AccessResource(int id)
    {
        Console.WriteLine($"Thread {id} waiting to enter...");
        await semaphoreSlim.WaitAsync(); // Wait asynchronously

        try
        {
            Console.WriteLine($"Thread {id} entered.");
            await Task.Delay(2000); // Simulate work
        }
        finally
        {
            Console.WriteLine($"Thread {id} leaving.");
            semaphoreSlim.Release(); // Signal
        }
    }
}
```

### Repository Pattern

The Repository Pattern is a design pattern that provides a way to manage and encapsulate data access logic. It creates an abstraction layer between the data access layer and the business logic layer of an application. This helps in achieving a clean separation of concerns, making the code more maintainable, testable, and flexible.

### Host Application and Background Service
Host Application:
Primary Purpose: The host application is the entry point for the application. It sets up the application's environment, configuration, and services, and then runs the application.

Responsibilities:

- Bootstrapping: Initializes the application by configuring services, middleware, and other components.
- Dependency Injection: Registers and manages the application's services using a dependency injection container.
- Configuration: Loads and provides access to configuration settings for the application.
- Hosting: Manages the application's lifecycle, including starting, stopping, and monitoring.

Example:
In an ASP.NET Core web application, the host application is typically created in the Program.cs file using the WebApplication.CreateBuilder() method, where you configure services, set up middleware, and define the application's entry point.
> https://github.com/dhananjaya-poojari/Interview-preparation/blob/main/System%20Design/RabbitMQ/Reciever/ApplicationBuilderExtensions.cs

Primary Purpose: A background service is a long-running task or process that runs independently of the main application thread. It performs asynchronous work in the background while the rest of the application continues to handle requests or perform other tasks.

Responsibilities:

- Long-Running Tasks: Executes tasks that need to run continuously or periodically in the background, such as processing messages, performing cleanup tasks, or updating data.
- Asynchronous Processing: Handles asynchronous operations efficiently, without blocking the main application thread.
- Lifecycle Management: Integrates with the host application's lifecycle to start, stop, and manage the background service.
  
Example:
In an ASP.NET Core application, a background service can be implemented by creating a class that inherits from BackgroundService and overrides the ExecuteAsync method. This method contains the logic for the background task, which may involve listening to a message queue, processing data, or performing other asynchronous operations.
```
// Register RabbitMQ queue receiver as a hosted service
builder.Services.AddHostedService<RabbitMQQueueReciever>();
```
