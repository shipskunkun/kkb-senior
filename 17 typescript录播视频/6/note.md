



1. 什么是类型保护？

根据判断逻辑的结果，缩⼩类型范围

逻辑条件语句块：if、else、elseif

特定的⼀些关键字：typeof、instanceof、in……



2. ⾃定义类型保护

   有的时候，以上的⼀些⽅式并不能满⾜⼀些特殊情况，则可以⾃定义类型保护规则

data is Element[]|NodeList 是⼀种类型谓词，格式为： xx is XX ，返回这种类型的函数就可以

被 TypeScript 识别为类型保护

+ 自定义类型是一个函数，返回 true 和 false
+ data is ？ 这种语法



typeof ,  可以获取变量的类型，可以定义变量的类型，在 ： 后面

keyof ,  获取对象所有 key的可以，用于限定函数参数类型，联合类型

```js
type personKeys = keyof Person;
// 等同：type personKeys = "name" | "age"

```

in  , 遍历



类型兼容