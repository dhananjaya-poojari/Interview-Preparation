# Frontend System Design

### Table of Contents
<details>
<summary>Networking</summary>

  
1. [Communication Protocals](#communication-protocals)

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
