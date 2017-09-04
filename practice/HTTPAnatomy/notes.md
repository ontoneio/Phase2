* Can diagram the anatomy of an HTTP URL 
* Can recall at least 5 HTTP status codes
* Can describe what an HTTP redirect is 
* Can recall at least 3 common HTTP headers 
* Can describe the difference between an HTTP POST and GET 
* Can describe what an HTTP cookie is 
* Can use the curl command to make HTTP requests 


### How the internet works 

> The internet consists of millions of interconnected networks that allow all sorts 
  computers and devices to communicate with each other. By convention, all devices 
  that participate in a network are provided unique labels. The general term for this
  type of label is an internet protocol address or IP Address and is similar 
  to a computer's phone number on the internet Further, IP Addresses have port numbers
  that add more detail about how to communicate(think of company phone extensions). 
  IP addresses are represented ad: 192.168.0.1 
  When a port number is needed, the address is specified as: 
  192.168.0.1.1234


  ###DNS  
  > This mapping from URL to IP address is handled by the Domain Naming System or DNS. 
    DNS is a distributed database which translates computer names like http://www.google.com
    to an IP address and maps the request to a remote server. Stated differently, it keeps track of UTLs and their corresponding IP addresses on the Internet. 

 The main thing you should understand is that when your browser issues a request, it is simply sending some text to an IP address. Because the client(browser) and the server have an agreement, or protocol, in the form of HTTP, the server can take apart the request, understand its components and send a response back to the web browser. The web browser will then process the response strings into content that you can understand. Navigating to websites like Facebook, Google and Twitter means you've been using HTTP all along. The details were hidden, but your browser was issuing the requests and processing the responses automatically. The different parts of the internet look something like: [Diagram Here]


### Clients and Servers
The most common client is an application you interact with on a daily basis called the Web Browser. Web Browsers are responsible for issuing HTTP requests and processing the HTTP response in a user-friendly manner onto your screen. Web browsers aren't the only clients around, as there are many tools and applications that can also issue HTTP requests. 

The content you're requesting is located on a remote computer called server. Servers are nothing more than machines or devices capable of handling inbound requests, and their job is to issue a response back. Often, the response they send back contains relevant data as specified in the request. 


### Resources  
Resource is a generic term for things you interact with on the internet via URL. 
This includes images, videos, web pages and other files. Resources are not limited to files and web pages. Resources can also be in the form of software that lets you trade stock or play a video game. There is no limit to the number of resources available on the internet. 

### Statelessness: 
A protocol is said to be stateless when it is designed in such a way that each request/response pair is completely independent of the previous one. It is important to be aware of HTTP as a stateless protocol and the impact it has on server resources and ease of use. In the context of HTTP, it means that the server does not need to hang on to information, or stat, between requests. As a result, when a request breaks en route to the server, no part of the system has to do any cleanup. Both these reasons make HTTP a resilient protocol, as well as a difficult protocol for building stateful applications. Since HTTP, the protocol of the internet, is inherently stateless that means web developers have to work hard to sumulate a stateful experience in web applications. 


## What is a URL? 


### URL Components 

When you see a URL, such as "http://www.example.com:88/home?item=book",
it is compromised of several components. We can break this URL into 5 parts: 

> http: 
The scheme. It always comes before the colon and two forward slashes and tells the web client how to access the resource. In this case it tells the web client to use the Hypertext Transfer Protocol or HTTP to make a request. Other popular URL schemes are ftp, mailto or git. 

> www.example.com: 
The host. It tells the client where the resource is hosted or located. 

> :88
The port or port number. It is only required if you want to use a port other than the default. 

> /home/:
The path. It shows what local resource is being requested. This part of the URL is optional. 

> ?item=book: 
The query string, which is made up of query parameters. It is used to send data to the server. This part of the URL is also optional 

> `http    "//    www.example.com    /home/`
  `URL scheme`        `Host`          `URL Path`

Sometimes, the path can point to a specific resource on the host. For instance, www.example.com/home/index.html points to an HTML file located on the example.com server. 

Sometimes, we may want to include a port number which the host uses to listen to HTTP requests. A URL in the form of `http://localhost:3000/profile` is using the port number 3000 to listen to HTTP requests. The default port number for HTTP is port 80. Even though this port number is not always specified, it is assumed to be part of every URL. Unless a different port number is specified, port 80 will be used by default in normal HTTP requests. To use anything other than the default, one has to specify it in the URL. 

### Query Strings/Parameters 

A simple URL with a query string might look like: 

`http://www.example.com?search=ruby&results=10`
Lets take them apart: 
? --> This is a reserved character that marks the start of the query string. 
search=ruby --> This is a parameter name/value pair 
& --> This is a reserved character, used when adding more parameters to the query string. 
result=10 --> This is also a parameter name/value pair. 

### Query string are great to pass in additional information to the server, however, there are some limits to the use of query strings: 

> Query strings have a maximum length. Therefore, if you have a lot of data to pass on, you will not be able to do so with query strings. 

> The name/value pairs used in query strings are visible in the URL. For this reason, passing sensitive information like username or password to the server in this manner is not recommended. 

> Space and special characters like & cannot be used with query strings. They must be URL encoded, which we'll talk about next. 

### URL Encoding 
By default URLs are designed to accept only certain characters in the ASCII character set. As such, unsafe or reserved characters not included in this set have to be converted or encoded to conform to this format. URL encoding serves the purpose of replacing these non-conforming characters with a % symbol followed by two hexadecimal digits that represent the ASCII code of the character. 

Below are some popular encoded characters and example URLs 

Character     ASCII CODE    URL   

  space          20			http://www.thedesignshop.com/shops/tommy%20hilfiger.html
    !            21         http://www.thedesignshop.com/moredesigns%21.html
    +            2B         http://www.thedesignshop.com/shops/spencer%2B.html
    #		     23         http://www.thedesignshop.com/%23somequotes%23.html

### Characters must be encoded if: 
1) They have no corresponding character within the ASCII character set. 
2) The use of the character is unsafe. For example % is unsafe because it is used for encoding other characters. 
3) The character is reserved for special use within the URL scheme. Some characters are reserved for a special meaning; their presence in a URL serve a specific purpose. Characters such as / , ? : @ and & are all reserved and must be encoded. 

For example & is reserved for use as a query string delimeter. : is also reserved to delemit host/port components and user/password. 

#### What characters can be used safely within a URL?  

 Only alphanumeric and special characters `$-.+?'()"',` and reserved characters when used for their reserved purposes can be used unencoded within a URL. As long as a character is not being used for its reserved purposes, it has to be encoded. 


## Making HTTP Requests 

### HTTP Request with a Browser. 

Making an HTTP request is easy. Say you want to visit Reddit in your browser. All you need to do is launch your browser and enter the address. 

### Processing Responses 

So far we've been sending various requests and looking at the raw HTTP data sent back by the server. This raw data returned by the server is called a response. We'll spend this section analyzing the various components of an HTTP response. 

- Status Code 
> The first component we will look ar is the `HTTP Status code` The status code is a three digit number that the server sends back after receiving a request signifying the status of the request. The status text displayed next to status code provides the description of the code. It is listed under the Status column of the inspector. 

The most common response status code you'll encounter is 200 which means the request was handled successfully. Other useful status codes are: 

200: OK --> The request was handled successfully
302: Found --> The requested resource has changed temporarily. Usually results in a redirect to another URL 
404: Not Found --> The requested resource cannot be found. 
500: Internal Server Error--> The server has encounter a generic error. 

As a web developer, you should know the above response status codes and their associated meaning very well. 





































































