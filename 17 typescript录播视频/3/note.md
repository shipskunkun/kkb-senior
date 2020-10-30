1. #### 接口定义对象

   1. 使用

      当接口作为 定义对象时，是一个类型，不能作为值用，

      用在对 对象定义的 ： 后面

   2. 可选属性

   3. 只读属性

   4. 任何类型属性



2. ####  接口定义函数

   当接口定义对象时候，key 是属性， value是类型

   当接口定义函数时，key 是函数参数列表（）, value 是函数返回值

   ```js
   interface IEventFunc {
       (e: MouseEvent): void
   }
   
   
   function on(el: HTMLElement, evname: string, callback: IEventFunc) {
   
   }
   ```

   

3. #### 接口合并

   多个同名的接口合并成一个接口



4. ### interface 与 type 的区别

   **interface**

   - 只能描述 `object`/`class`/`function` 的类型
   - 同名 `interface` 自动合并，利于扩展

   **type**

   - 不能重名
   - 能描述所有数据



5. 什么是类型推导

<u>TypeScript</u> 编译器会根据当前上下文自动的推导出对应的类型标注，这个过程发生在：

- 初始化变量

- 设置函数默认参数值

- 返回函数值

  

5. 什么是类型断言