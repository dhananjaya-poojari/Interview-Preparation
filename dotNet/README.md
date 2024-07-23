# .Net
### Table of Contents
<details>
<summary>Basic Concepts</summary>

1. [Host Application and Background Service](#host-application-and-background-service)
2. [Repository Pattern](#repository-pattern)
3. [Differences between `Thread` and `Task` in .NET](#differences-between-thread-and-task-in-net)
4. [Thread.Sleep and Thread.SpinWait](#threadsleep-and-threadspinwait)
</details> 

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

### Response Caching
#### Few constraints for response caching
1. The request must result in a server response with a `200 (OK)` status code.
2. Response Caching Middleware must be placed before middleware that require caching. For more information, see ASP.NET Core Middleware.
3. The `Authorization` header must not be present.
4. Only `Get` and `Head` we can apply response Caching

> https://www.linkedin.com/posts/mwaseemzakir_csharp-dotnet-dotnetcore-activity-7011918313458950144-7baR/?utm_source=share&utm_medium=member_android

### Differences between `Thread` and `Task` in .NET

#### Overview

In .NET, both `Thread` and `Task` are used to perform operations asynchronously, but they serve different purposes and have distinct features. Below is a comparison to help understand their differences.

#### Thread

- **Definition**: A `Thread` represents an independent path of execution within an application.
- **Creation and Management**: Threads are created and managed manually.
- **Resource Usage**: Threads are relatively heavyweight, each having its own stack and memory allocation.
- **State and Lifecycle**: Threads have complex states like `Unstarted`, `Running`, `WaitSleepJoin`, `Suspended`, `AbortRequested`, and `Stopped`.
- **Synchronization**: Requires manual synchronization (e.g., locks, mutexes).
- **Blocking Operations**: Threads can be blocked, put to sleep, or wait for conditions.

```csharp
Thread thread = new Thread(() => {
    // Do some work
});
thread.Start();
thread.Join();  // Waits for the thread to finish
```

#### Task

- **Definition**: A `Task` represents an asynchronous operation and is a higher-level abstraction over threads.
- **Creation and Management**: Tasks are easier to create and manage, often using the Task class and async/await keywords.
- **Resource Usage**: Tasks are more lightweight as they use the thread pool, which reuses threads.
- **State and Lifecycle**: Tasks have simpler lifecycle management, transitioning from `Created` to `Running` to `Completed`.
- **Synchronization**: Simplified with async/await, reducing the need for manual synchronization.
- **Non-blocking Operations**: Tasks naturally support non-blocking operations.

```
Task task = Task.Run(() => {
    // Do some work
});
await task;  // Asynchronously waits for the task to complete
```

### Thread.Sleep and Thread.SpinWait
**Thread.Sleep**<br>
- Purpose: Puts the thread into a sleep state for a specified amount of time.
- Behavior:
   - The thread is suspended and the CPU is free to perform other tasks.
   - Causes a context switch, which means the operating system's scheduler is involved in pausing and resuming the thread.
- Usage
   - Use it when you need to wait for a relatively long period (milliseconds or more) and want to free up the CPU for other tasks.
   - Examples: Polling, implementing a retry mechanism with delays, or pacing operations.
     
**Thread.SpinWait**
- Purpose: Busy-waits for a specified number of iterations.
- Behavior:
   - The thread remains active and continuously checks a condition.
   - Does not cause a context switch.
- Usage
   - Use it for very short waits where the overhead of a context switch would be too high, and you need precise control over timing.
   - Examples: Implementing low-level spin locks or fine-grained synchronization where the wait time is expected to be extremely short.
