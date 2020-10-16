- koa中cookie的使用

  - 储存cookie的值；

  ```js
  ctx.cookies.set(name, value, [options])
  ```

  - 获取cookie的值

  ```js
  ctx.cookies.get(name, [options])
  ```

  - options常用设置
    - `maxAge` 一个数字表示从 Date.now() 得到的毫秒数
    - `expires` cookie 过期的 `Date`
    - `path` cookie 路径, 默认是`'/'`
    - `domain` cookie 域名
    - `secure` 安全 cookie  设置后只能通过https来传递cookie
    - `httpOnly` 服务器可访问 cookie, 默认是 **true**
    - `overwrite` 一个布尔值，表示是否覆盖以前设置的同名的 cookie (默认是 **false**). 如果是 true, 在同一个请求中设置相同名称的所有 Cookie



cookie.js

```js
Cookies.set('name', 'value', { expires**:** 7, path**:** '' });

Cookies.get('nothing'); **//\* => undefined*

Cookies.remove('name');

Cookies.set('name', 'value', { domain: 'subdomain.site.com' })
```

