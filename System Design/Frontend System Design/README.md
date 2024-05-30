# Frontend System Design

### Table of Contents
<details>
<summary>Networking</summary>

  
1. [Communication Protocals](#communication-protocals)
2. [REST API's](#rest-apis)

</details>

### Communication Protocals

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




