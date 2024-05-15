# C#

### init property
```
public class Member
{
    public int Id { get; init; }
    public string Name { get; init; }
    public string Address { get; init; }
}

Member memberObj = new Member{ Id =1 };
```
Init-only properties can or cannot be set as per your requirement. As you notice in the above code, only ID property is set and name and address properties are not set. Please note that if any property is not set at the time of object creation that property cannot be set.

### record types
record types are immutable by default. The core difference between class and record type in C# lies in how they handle equality. Classes use reference equality, meaning two instances are equal if they point to the same memory location. Records use value equality, considering two instances equal if their properties have the same values.

The record is also a reference type that behaves identically to the value type when it relates to value equality.
```
public record Person(string FirstName, string LastName);

Person person = new("Nancy", "Davolio");
```
Please note that if any property is not set at the time of object creation that property cannot be set.

### Key Lookup in Dictionary
