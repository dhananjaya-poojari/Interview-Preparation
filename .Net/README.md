# .Net
### Table of Contents
<details>
<summary>Basic Concepts</summary>

1. [Host Application and Background Service](#host-application-and-background-service)
2. [Repository Pattern](#repository-pattern)
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

