# Frontend System Design

### Table of Contents
<details>
<summary>Networking</summary>

1. [Communication Protocals](#communication-protocals)
2. [REST API's](#rest-apis)
3. [GraphQL](#graphql)
4. [gRPC](#grpc)
5. [HTTP/2 vs HTTP/1](#http2-vs-http1)

</details>

<details>
<summary>Communication</summary>

1. [WebSockets](#websockets)
</details>

### Communication Protocals
![Network Protocal](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/3ed2c187-152b-4521-b7cc-a5a83ecad44b)

#### HTTP
HTTP is a protocol for fetching resources such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser. A complete document is reconstructed from the different sub-documents fetched, for instance, text, layout description, images, videos, scripts, and more.
![Screenshot 2024-05-26 at 11 09 12 AM](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/066ad65e-937e-4ced-a59c-8966504bd13a)

> https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview

#### HTTP/3 QUIC
HTTP/3 will be the first major upgrade to the hypertext transfer protocol since HTTP/2 was approved in 2015.
The use of QUIC means that HTTP/3 relies on the `User Datagram Protocol (UDP)`, not the Transmission Control Protocol (TCP). Switching to UDP will enable faster connections and faster user experience when browsing online.
![Screenshot 2024-05-26 at 11 19 43 AM](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/582caf03-26fb-40ef-99bf-2ba6fd6098ea)

> https://www.cloudflare.com/en-gb/learning/performance/what-is-http3/

#### HTTPS
Hypertext transfer protocol secure (HTTPS) is the secure version of HTTP, which is the primary protocol used to send data between a web browser and a website. HTTPS is encrypted in order to increase security of data transfer. This is particularly important when users transmit sensitive data, such as by logging into a bank account, email service, or health insurance provider.
![Screenshot 2024-05-26 at 11 21 56 AM](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/8f6f156a-7aa7-4396-8ce4-7f3d260c4c2d)

> https://www.cloudflare.com/en-gb/learning/ssl/what-is-https/

#### WebSocket
The WebSocket API is an advanced technology that makes it possible to open a two-way interactive communication session between the user's browser and a server. With this API, you can send messages to a server and receive event-driven responses without having to poll the server for a reply.
![Screenshot 2024-05-26 at 11 24 16 AM](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/90804bf9-c317-4ab9-95a4-6c6612c54ef6)

> https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API

![1717049951626](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/46020675-32f5-46bc-9af2-5e215287a0b0)

### REST API's
![Screenshot 2024-05-28 at 6 21 58 PM](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/03efaf87-961a-4eba-b6e2-1ca73fc337b0)

#### PUT
The PUT method is used to update an existing resource. If the resource does not exist, it can create a new one.

#### PATCH
The PATCH method is used to update an existing resource. It is similar to PUT, except that PATCH enables clients to update specific properties on a resource—without overwriting the others.

#### OPTIONS
The OPTIONS method is used to describe the communication options for the target resource.
Usage: Check which HTTP methods are supported by the server

#### HEAD
The HEAD method is similar to GET but only retrieves the headers and not the body of the response.

#### HTTP Request Headers

This table lists common HTTP request headers, their usage, and simple examples.

| Header           | Usage                                                     | Example                                |
|------------------|-----------------------------------------------------------|----------------------------------------|
| `Accept`         | Specifies the media types the client can handle           | `Accept: application/json`             |
| `Authorization`  | Contains credentials for authenticating the client        | `Authorization: Bearer <token>`        |
| `Content-Type`   | Indicates the media type of the request body              | `Content-Type: application/json`       |
| `User-Agent`     | Identifies the client software making the request         | `User-Agent: Mozilla/5.0`              |
| `Referer`        | Provides the URL of the resource from which the request came | `Referer: https://example.com`       |
| `Host`           | Specifies the host and port number of the server          | `Host: www.example.com`                |
| `Cache-Control`  | Directs caching mechanisms to follow specific rules       | `Cache-Control: no-cache`              |
| `Cookie`         | Sends stored HTTP cookies to the server                   | `Cookie: sessionId=abc123`             |
| `If-Modified-Since` | Makes the request conditional based on the modification date | `If-Modified-Since: Wed, 21 Oct 2015 07:28:00 GMT` |
| `Accept-Encoding` | Lists acceptable encodings for the response               | `Accept-Encoding: gzip, deflate`       |

#### HTTP Response Headers

This table lists common HTTP response headers, their usage, and simple examples.

| Header               | Usage                                                     | Example                                |
|----------------------|-----------------------------------------------------------|----------------------------------------|
| `Content-Type`       | Indicates the media type of the response body             | `Content-Type: application/json`       |
| `Content-Length`     | Specifies the size of the response body in bytes          | `Content-Length: 348`                  |
| `Set-Cookie`         | Sends cookies from the server to the client               | `Set-Cookie: sessionId=abc123; Path=/; HttpOnly` |
| `Cache-Control`      | Directs caching mechanisms to follow specific rules       | `Cache-Control: no-store`              |
| `ETag`               | Provides a unique identifier for the response version     | `ETag: "abc123"`                       |
| `Last-Modified`      | Indicates the date and time the resource was last modified| `Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT` |
| `Location`           | Redirects the client to a different URL                   | `Location: https://www.example.com/newpage` |
| `Server`             | Identifies the server software that handled the request   | `Server: Apache/2.4.1 (Unix)`          |
| `WWW-Authenticate`   | Indicates the authentication method that should be used   | `WWW-Authenticate: Basic realm="example"` |
| `Access-Control-Allow-Origin` | Specifies which origins can access the resource     | `Access-Control-Allow-Origin: *`       |


### GraphQL

#### Benefits of GraphQL
- prevents over-fetching and under-fetching between the client and server.
- it provides more flexibility and consistency in accessing data from any resource with a single query, as well as combining data from different sources.
- GraphQL has a schema that defines the types, fields, and relations of your data, which serves as a self-documenting contract between the client and server.

#### Differences between REST and GraphQL
| Feature               | REST                                                | GraphQL                                             |
|-----------------------|-----------------------------------------------------|-----------------------------------------------------|
| Protocol              | Uses HTTP protocol.                                 | Can use any transport layer, but typically uses HTTP. |
| Request Structure     | Requests are made to specific endpoints.            | Single endpoint for all requests.                   |
| Data Fetching         | Over-fetching or under-fetching of data is common.  | Allows clients to request only the data they need.   |
| Query Flexibility     | Fixed data shape based on endpoint.                 | Clients define the structure of the response.       |
| Strong Typing         | Not inherently strongly typed.                      | Strongly typed with a schema.                       |
| Caching               | Supports caching mechanisms.                        | Caching responses can be challenging due to dynamic queries. |
| Error Handling        | Standard HTTP status codes.                         | Custom error handling with detailed error messages. |
| Versioning            | Changes may require versioning.                     | Changes to the schema don't necessarily require versioning. |
| Learning Curve        | Easy to understand for simple cases.                | Steeper learning curve due to GraphQL schema and query language. |
| Implementation        | Simple to implement.                                | More complex to implement due to schema definition and resolver functions. |

### gRPC
#### Comparison of REST and gRPC

| Feature                            | REST                                                                 | gRPC                                                                |
|------------------------------------|----------------------------------------------------------------------|---------------------------------------------------------------------|
| **Communication Protocol**         | Typically uses HTTP/HTTPS                                            | Uses HTTP/2 as the default transport protocol                        |
| **Message Format**                 | Primarily uses JSON or XML for payloads                              | Uses Protocol Buffers (proto buf) for payloads                       |
| **IDL (Interface Definition Language)** | No standard, often uses OpenAPI (Swagger) or WSDL                    | Uses Protocol Buffers (proto buf) as a standard IDL                  |
| **Data Serialization**             | JSON, XML, or other text-based formats                               | Binary serialization with ProtoBuf                                   |
| **Efficiency**                     | Generally less efficient due to text-based formats and multiple round trips | More efficient, thanks to binary serialization and multiplexing in HTTP/2 |
| **Flexibility**                    | More flexible in terms of data formats and can support various data models | Strongly typed, enforcing a clear contract between client and server |
| **RPC Styles**                     | Primarily supports synchronous request-response (HTTP methods like GET, POST) | Supports synchronous and asynchronous RPCs, including bidirectional streaming |
| **Streaming**                      | Supports server-sent events or WebSocket for streaming, but with limitations | Native support for bidirectional streaming, server streaming         |
| **Service Discovery**              | Often requires external tools for service discovery (e.g., Kubernetes service discovery) | Built-in support for service discovery with naming and load balancing |
| **Security**                       | Typically relies on HTTPS for security                               | Supports transport-level security (TLS/SSL) and allows for additional authentication and authorization mechanisms |
| **Code Generation**                | Code generation is optional and can be done with tools like Swagger Codegen | Automatic code generation for client and server, providing a consistent API contract |
| **Compatibility**                  | Widely adopted and compatible with virtually any platform or language | Supports multiple programming languages but may require gRPC-specific libraries |

#### Advantages
- **Performance**: 10x faster
- **Streaming**: Supports data streaming
- **Code Generation**: Enables automatic code generation
- **Language Agnostic**: Can be used with multiple programming languages
- **Service Discovery**: Facilitates service discovery
- **Security**: Provides enhanced security features

#### Disadvantages
- **Non-human readable format**: Data is not easily readable by humans
- **Limited browser support**: Not all browsers support this technology
- **No Edge Caching**: Edge caching is not possible due to the use of the POST method
- **Steeper learning curve**: Requires more effort to learn and implement

### HTTP/2 vs HTTP/1

> https://imagekit.io/blog/http2-vs-http1-performance/

### WebSockets
The WebSocket API is an advanced technology that makes it possible to open a two-way interactive communication session between the user's browser and a server. With this API, you can send messages to a server and receive event-driven responses without having to poll the server for a reply.
After connection to websockets <br>
![image](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/8495df74-eaaf-41cc-a8ea-484111004277)
<br>After Server sent message <br>
![image](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/3af4c3b9-f432-44de-a87a-9defa146d05b)

![image](https://github.com/dhananjaya-poojari/Interview-preparation/assets/77887564/2ef5941b-4845-4a24-aaab-2f85d037e7a2)
`wss` is like `https` with SSL handshake. `ws` is `http` like without handshake

> https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API
> https://github.com/dhananjaya-poojari/Communication/blob/main/Server/Controllers/WebSocketController.cs
