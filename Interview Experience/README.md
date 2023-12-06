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
<summary>veArc</summary>

 #### Paralell programming and Concurrent Programming
 #### Diffrent ways to achieve Dependency Injection
 #### Abstract Class
 #### Routing in webserver
 #### Thread and Task 
 #### Generics in C#
</details>
