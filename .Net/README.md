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
