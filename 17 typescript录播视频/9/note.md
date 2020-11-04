1. 装饰器

本质是函数，ts装饰器只能在类中使用



调用时机：

不是类调用的时候执行（使用类调用类的静态函数或者实例化类）

而是在类被创建，被定义的过程中执行的



分类：

方法装饰器参数，

```js
function log(target: Function, name: string, descriptor: PropertyDescriptor) {
```

打印出来是什么东西

```js
[Function: M] { add: [Function], sub: [Function] } 


add 

{
  value: [Function],
  writable: true,
  enumerable: true,
  configurable: true
}
```

给我的感觉，有点像，方法的拦截器？

方法的Proxy 中 get , 当调用方法的时候，实际上是调用的 装饰器



除了对方法进行装饰，还可以对类、属性、参数、访问符 等进行包装。



#### 装饰器工厂

可以传给装饰器callback 函数，这个函数在类中定义，在装饰器中执行

可以给装饰器传入一些值。

