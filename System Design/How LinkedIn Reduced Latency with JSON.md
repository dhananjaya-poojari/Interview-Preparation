# How LinkedIn Reduced Latency with JSON?

## Why?
LinkedIn has over 900 million members in 200 countries. To serve this traffic, they use a microservices architecture with thousands of backend services. These microservices combine to tens of thousands of individual API endpoints across their system.
### 1. format is verbose (repeating fields)
```
[
    {
        "title": "Book One",
        "author": "Author A",
        "publisher": "Publisher X",
        "year": 2020,
        "isbn": "111-1111111111"
    },
    {
        "title": "Book Two",
        "author": "Author B",
        "publisher": "Publisher Y",
        "year": 2021,
        "isbn": "222-2222222222"
    },
]
```
Why JSON is Verbose
1. Repeated Field Names: In the JSON example above, the field names (title, author, publisher, year, isbn) are repeated for each book entry. This repetition can lead to increased size and can make the JSON harder to read when dealing with large datasets.

2. Redundant Data: In cases where multiple objects share the same data (e.g., multiple books by the same author or published by the same publisher), the data is duplicated in each object.

   
### 2. incremental parsing is inefficient
JSON is not inherently designed for efficient incremental parsing. Unlike some other data formats, JSON’s structure requires the parser to have a good understanding of the entire document to properly interpret nested objects and arrays.

### 3. not densely packed, so requires more bytes 
JSON, due to its textual nature and human-readable format, often results in larger data sizes compared to more compact binary formats. This can lead to inefficiencies in both storage and transmission.

1. Verbose Textual Representation<br/>
JSON represents data in a human-readable text format, which inherently requires more bytes than a binary representation.

     - `Field Names as Strings`: Each key in a JSON object is a string, which means that the field names are repeated for each object. This repetition can significantly increase the size of the data.
    - `Data Type Indicators`: In JSON, data types are indicated by their structure (e.g., strings are enclosed in quotes, arrays in brackets, objects in braces), which adds additional characters.

2. senialized to a 9 bytes instead of 4<br>
```
{
    "id": 1
}
```
This JSON string contains:

  - 1 character for the opening brace `{`
  - 4 characters for "id"
  - 1 character for the colon `:`
  - 1 character for the space
  - 1 character for the digit `1`
  - 1 character for the closing brace `}`
    
So, the total is 9 bytes, assuming ASCII encoding where each character is 1 byte.

## Solution Google protocol buffer
### 1. compact payload size (improves throughput)
```
message SensorData {
  required int32 id = 1;
}
```
The actual serialized output in Protocol Buffers might be just 2 bytes:

  - 1 byte for the field tag and type.
  - 1 byte for the value 1.

### 2. eficient serialization and descrialization
Fixed-Length and Varint Encoding
  - Fixed-Length: Some fields in Protocol Buffers use fixed-length encoding (e.g., fixed32 and fixed64), which allows for predictable and efficient storage.
  - Varint Encoding: Protocol Buffers use variable-length encoding for integer types (int32, int64, uint32, uint64, etc.). Smaller values take fewer bytes to encode. For example, the number 1 is encoded as a single byte, while larger numbers take more bytes as needed.

## How did they rollout?

The rollout of Protocol Buffers (protobuf) support in Rest.li at LinkedIn was executed in a phased manner to ensure compatibility and minimize disruption. This document outlines the steps involved in adding protobuf support and updating services to utilize this feature.

### Steps

#### 1. Added Protocol Buffers Support to Rest.li
- Enhanced Rest.li to support Protocol Buffers alongside existing JSON support.
- Updated serialization and deserialization logic to handle both JSON and protobuf formats.

#### 2. Updated All Services to Use the Latest Version of Rest.li
- Bumped up all services to use the latest version of Rest.li, which now supports both JSON and Protocol Buffers.
- Ensured backward compatibility to allow smooth transition and interoperability between services using different formats.

#### 3. Client Configuration for Protobuf Requests
- Clients set the `Content-Type` header to `application/x-protobuf2` to indicate that the request is encoded in protobuf.
- Example:
  ```
  http
  Content-Type: application/x-protobuf2
  ```
 #### 4. Server Response with Protobuf
- If the server supports protobuf, it responds with the response encoded in protobuf.The server sets the Content-Type header to application/x-protobuf2 in the response.
- Example:
  ```
  http
  Content-Type: application/x-protobuf2
  ```

