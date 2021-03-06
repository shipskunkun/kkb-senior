1. js 和 ts 最大的区别是什么

   前者是动态类型语言，后者是静态类型语言

   前者在程序执行的时候才做类型检查

   后者在编译期间做数据类型检查，发现潜在的错误

   ts 更规范，有利于团队开发协作一些大型项目，项目重构

   配合ide, 错误提示更智能



2. 执行本章代码

```js
tsc -p    tsconfig.json
```



3. 变量定义

   普通类型， 变量后面加 :  和 typeof 值

   对象、数组、date 类型定义（在 `JavaScript` 中，有许多的内置对象，比如：Object、Array、Date……，我们可以通过对象的 <u>构造函数</u> 或者 <u>类</u> 来进行标注）

```js
let  a: number = 1;
let b: boolean = true;


let a: Object = {}
let arr: Array<number> = [1, 2, 3]
let d: Date = new Date()
```



**null 和 undefined**

不能赋其他类型的值

但是如果开始是其他类型，后面可以赋值为 null、undefined







4. **自定义对象类型**

   另外一种情况，许多时候，我们可能需要自定义结构的对象。这个时候，我们可以：

   - 字面量标注 ， 定义对象的key 和 类型

   - 接口， 用接口定义对象的key 和 类型，可复用

     - 编译后， 不存在代码中，只是给编译器看的
     - 接口只能作为类型标注使用，不能作为具体值，它只是一种抽象的结构定义，并不是实体，没有具体功能实现

   - 定义 <u>类</u> 或者 <u>构造函数</u>

     ​	复杂，比如只想约束某个函数接收的参数结构，没有必要去定一个类，使用接口会更加简单

5. #### 什么时候用class 什么时候用 接口？

   ​	如果定义了功能，用class ， 如果定义的是抽象性结构，用 interface

6. #### 通过包装对象定义的 可以 赋值为 简单类型的，反过来不行

   ​	比如：字符串赋值给 字符串对象，字符串对象不能赋值为 字符串

```js
let a: string;
a = '1';
// error String有的，string不一定有（对象有的，基础类型不一定有）
a = new String('1');

let b: String;
b = new String('2');
// ok 和上面正好相反
b = '2';
```



7. #### 定义数组类型

   1. **使用泛型标注**

   2. **简单标注**

      

```js
let arr1: Array<number> = [];
let arr2: string[] = [];

```



8. #### 元祖类型

   ```js
   let data1: [string, number] = ['开课吧', 100];
   ```

   

9. #### 任意类型

   有的时候，我们并不确定这个值到底是什么类型或者不需要对该值进行类型检测，就可以标注为 `any` 类型

   ```typescript
   let a: any;
   ```

   - 一个变量申明未赋值且未标注类型的情况下，默认为 `any` 类型
   - 任何类型值都可以赋值给 `any` 类型
   - `any` 类型也可以赋值给任意类型
   - `any` 类型有任意属性和方法

   注意：标注为 `any` 类型，也意味着放弃对该值的类型检测，同时放弃 IDE 的智能提示

   > 小技巧：当指定 `noImplicitAny` 配置为 `true`，当函数参数出现隐含的 `any` 类型时报错

   

   

   10. #### 函数类型

   在 <u>JavaScript</u> 函数是非常重要的，在 <u>TypeScript</u> 也是如此。同样的，函数也有自己的类型标注格式

   - 参数
   - 返回值

   ```typescript
   函数名称( 参数1: 类型, 参数2: 类型... ): 返回值类型;
   ```

   ```typescript
   function add(x: number, y: number): number {
     	return x + y;
   }
   ```




11. #### 枚举类型

    ​	相当于常量，不能被修改

12. #### 无值类型

    表示没有任何数据的类型，通常用于标注无返回值函数的返回值类型，函数默认标注类型为：`void`

    ```typescript
    function fn():void {
        // 没有 return 或者 return undefined
    }
    ```

    