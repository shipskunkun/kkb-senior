12节番外

http://nodejs.cn/learn

### `http.createServer()`

返回 `http.Server` 类的新实例。

用法：

```javascript
const server = http.createServer((req, res) => {
  //使用此回调处理每个单独的请求。
})
```

HTTP 模块提供了 5 个类：

- `http.Agent`
- `http.ClientRequest`
- `http.Server`
- `http.ServerResponse`
- `http.IncomingMessage`

### `http.ClientRequest`

当 `http.request()` 或 `http.get()` 被调用时，会创建 `http.ClientRequest` 对象。

当响应被接收时，则会使用响应（`http.IncomingMessage` 实例作为参数）来调用 `response` 事件。

返回的响应数据可以通过以下两种方式读取：

- 可以调用 `response.read()` 方法。
- 在 `response` 事件处理函数中，可以为 `data` 事件设置事件监听器，以便可以监听流入的数据。



### `http.Server`

当使用 `http.createServer()` 创建新的服务器时，通常会实例化并返回此类。

拥有服务器对象后，就可以访问其方法：

- `close()` 停止服务器不再接受新的连接。
- `listen()` 启动 HTTP 服务器并监听连接。

### `http.ServerResponse`

由 `http.Server` 创建，并作为第二个参数传给它触发的 `request` 事件。

通常在代码中用作 `res`：

```javascript
const server = http.createServer((req, res) => {
  //res 是一个 http.ServerResponse 对象。
})
```

在事件处理函数中总是会调用的方法是 `end()`，它会关闭响应，当消息完成时则服务器可以将其发送给客户端。 必须在每个响应上调用它。



以下这些方法用于与 HTTP 消息头进行交互：

​	....

- `setHeader('headername', value)` 设置 HTTP 消息头的值。

​    ...

在处理消息头之后，可以通过调用 `response.writeHead()`（该方法接受 statusCode 作为第一个参数，可选的状态消息和消息头对象）将它们发送给客户端。

若要在响应正文中发送数据给客户端，则使用 `write()`。 它会发送缓冲的数据到 HTTP 响应流。

如果消息头还未被发送，则使用 `response.writeHead()` 会先发送消息头