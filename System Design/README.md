# System Design
<details>
<summary>
  Table of Contents
</summary>

 
</details>

### Horizontal vs Vertical Scaling
 | Horizontal | Vertical |
| ------------- | ------------- |
|Scale Out|Scale up|
|Horizontal scaling involves adding `more machines` to a system|Vertical scaling involves adding `more power` to an existing machine.|
|Automatically scales by adding or reducing computing nodes as workload increases or decreases.|Adding more power to an existing machine, such as CPU, RAM, storage, or network speed.|
|Load balancing is essential for efficiently distributing the workload across multiple nodes.|Not required in the single node.|
|Workload is distributed across multiple nodes.|A single node handles the entire workload.|
|Minimize downtime by ensuring that if one system fails, another will seamlessly handle the request.| The occurrence of system failure results in downtime.|
|Add as many machines as you can|Limited to the resource capacity the single machine can handle|

![image](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/014bd462-a886-4e99-8663-0bc49b26d6d7)
![image](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/22b8fa9e-612f-451d-ae71-83b1f7e9101b)
> https://www.cloudzero.com/blog/horizontal-vs-vertical-scaling/
### Distributed System
A distributed system is a collection of computer programs that utilize computational resources across multiple, separate computation nodes to achieve a common, shared goal.Distributed systems aim to remove bottlenecks or central points of failure from a system.
![image](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/ec12fd07-5858-4ca4-bd11-2aae3eb611cb)
> https://www.atlassian.com/microservices/microservices-architecture/distributed-architecture <br />
> https://youtu.be/K0Ta65OqQkY?feature=shared
### Load balancing
If the system requires High Availability,Performance, and Throughput, we should consider using a Load Balancer.Load balancing directs and controls internet traffic between the application servers and their visitors or clients. As a result, it improves an application’s availability, scalability, security, and performance.< br />
Some examples of load balancing include: 
- Round-robin method
- Least connection method
- Least response time method
- Weighted round-robin method
- IP hash method
- Weighted least connection method

![image](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/38757066-2857-41ba-afd7-dd872c22b84e)
> https://aws.amazon.com/what-is/load-balancing/
### Consistent Hashing
Consistent hashing is a distributed hashing technique that assigns positions to servers and objects in a hash ring.It works well when the number of machines storing data may change. Consistent hashing minimizes the number of keys that need to be remapped when the number of nodes changes.

![image](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/7cb7d3bb-995b-4622-90f8-803378db9faf)
> https://vishalrana9915.medium.com/consistent-hashing-36fa25892b4f#:~:text=WHAT%20IS-,CONSISTENT,-HASHING%3F
### Message Queue
A message queue is a type of middleware that allows communication between programs, services, and other components. It's a queue of messages sent between applications. 
![image](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/94fab944-d05b-410e-95d1-4ce5ad87beb7)
> https://aws.amazon.com/message-queue/ <br />
> https://youtu.be/oUJbuFMyBDk?feature=shared
### Database Sharding
Database sharding is a technique for splitting a large database into smaller chunks, called shards.Sharding, also known as horizontal partitioning, is a popular scale-out approach for relational databases.
![image](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/c8f95167-b970-4f78-bfbd-7e3165a41348)
> https://aws.amazon.com/what-is/database-sharding/
### SQL or No-SQL based on ACID 
### Blob/object Storage
### CDN
### Database Indexes
### API Gateway
### Data Replication
### Web sockets
### Microservice Arhitecture
