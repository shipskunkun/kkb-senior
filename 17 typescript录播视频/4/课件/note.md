1. 函数的标注

   参数的类型，返回值的类型

   注意，使用箭头函数时，函数的标注是啥样的

   type 定义函数

   interface 标注



2. 函数的 可选参数 和 默认参数

    可选参数： ？  在后面

   默认参数： 默认 = 值

   

   

3. this 值

   ​	js 是动态类型语言，所以对象中的方法 中的 this 类型是any

   ​	

4. 函数重载

    定义不同的参数匹配规则

    ```js
    function css(ele: HTMLElement, attr: PlainObject);
    function css(ele: HTMLElement, attr: string, value: string|number);
    function css(ele: HTMLElement, attr: any, value?: any) 
    ```

    