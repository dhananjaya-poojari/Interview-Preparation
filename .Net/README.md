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
- Semaphore
- SemaphoreSlim
