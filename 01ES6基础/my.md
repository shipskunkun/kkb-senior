#### 1.let、const

块级作用域

不能重复声明

let、const 没有变量提升, const 不能重新赋值

**暂时性死区**:只要块级作用域内存在`let`\const命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。在声明前，赋值会报错。



#### 7. 解构赋值

**本质： 给变量赋值，赋值来自对象的属性值、数组的索引值**

​    对象解构：变量名 和 属性名 要对应
​    数组解构：变量名 和 值索引对应

```js
let {a,c} = {a:123, b:456, c:789}
console.log(a, c)
```

数组的解构赋值：可以用于交换变量值

字符串也可以解构赋值，但是用的少。

####  8. 展开运算符

...

1. 数组展开成 数组项，用 , 分开
2. 剩余参数，表示数组后面项目。

``` 
// 展开运算符
let arr = [1,2,3,4,5];
let arr2 = ["a",...arr,"b","c"];

// 把 arr 中的数据放入 arr2 中，从 第 1 位开始排列
// ["a",1,2,3,4,5,"b","c"]
console.log(arr2);

// 剩余参数
let arr3 = [1,2,3,4,5];
let [a,...b] = arr3;
b = [2,3,4,5]
```

还能对象展开！之前都不知道

**展开对象时候，如果有重复的属性，以后定义的为准。**

比如obj 中 a:1, obj2 中 a:3

```js
let obj = {
    a: 1,
    b: 2
};
let obj2 = {
    ...obj,
    c: 3,
    d: 4
};
```

记得在写算法的时候，有解构赋值，**解决arr引用地址浅拷贝的问题**
对象中也可以

```js
let obj = {
    a: 1,
    b: 2
};
let obj2 = {...obj}
obj.c = 3
obj2 //不变

let obj2 = {
    ...obj,
    c: 3,
    d: 4
};
```

#### set

不重复，方法： add, delete, has , clear  属性：size

####  map

set、get、delete、has

map 的初始化，之前不知道，**是二位数组**

```js
let data = new Map([["leo",40],["zmouse",30],["reci",20]]);
data.set("刘伟",41);
data.delete("leo");
```

事实上，不仅仅是数组，任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构（详见《Iterator》一章）都可以当作Map构造函数的参数。
注意到了么，本身可遍历，而且每一项是一个双元素数组

```js
let data = new Map([{name:123}]); // 是错误的哦
```

#### 剩余参数

```js
let fn = (a,...arg)=>{
    //console.log(arguments);
    console.log(a,arg);
};

fn(1,2,3,4);

// 箭头函数本身没有不定参
// rest 参数 剩余参数
```

#### 箭头函数 this

后面几条面试的时候忘了。

```js
// 阮一峰例子
function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

var id = 21;

foo.call({ id: 42 });       注意为什么是42，这个箭头函数的定义生效是在foo函数生成时
// id: 42



function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000);
  // 普通函数
  setInterval(function () {
    this.s2++;
  }, 1000);
}
var timer = new Timer();
setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);
// s1: 3
// s2: 0
```

特点：

1. 箭头 this 指向，箭头函数定义时所在的作用域的this。**而且固定不可变。使用call 也不行**
2. **不能当做构造函数，不可以使用new**
3. **不可以使用`arguments`对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。**
4. **不可以使用`yield`命令，因此箭头函数不能用作 Generator 函数。**



<u>定义时所在作用域的this！！！定义！ 作用域！</u>

```js
document.onclick = function(){
    console.log(this);  //document
    let fn = (a,...arg)=>{  
        console.log(this);  //document
    };
    fn();
};

document.onclick = function(){
    function fn() {
        console.log(this)  //window，匿名函数和 setTimeout 中，指向 window
    }
    fn();
};

document.onclick = function(){
    let fn = ()=>{
        console.log(this)  //document
    }
    fn();
};

let fn2 = function(){
    console.log(this)  //window
    fn = ()=>{
        console.log(this)  //window
    }
    fn()
}
fn2()
```

#### 参数默认值

```js
let fn = (nub=0,nub2=0)=>{
    console.log(nub+nub2);
}
fn();
```

### 数组新增方法

Array.from、Array.isArray、arr.find、findIndex、includes、flat、Array.fill

不常用的：Array.of

Array Array.of(element0[, element1[, ...[, elementN]]]) 将参数转成一个数组

```
*let* arr = *Array*.of(1,2,3,4,5,5,6)  //是展开运算符的逆操作
```

参数：
    elementN 要放入数组中的数据

返回值：   
    新数组



Array.fill 在写算法的时候经常用到，数组初始化



#### 模板字符串

除了自己常用的  `${name}` 之外，还可以使用方法， 方法需要返回值

```js
let name = "LEO";
let age = 40;
let gender = function(){
    return "男"
};
let str = `姓名：${[1,2,3,4]}，
年龄：${age}岁，
性别：${gender()}`;
```

#### 对象的属性和方法

**对象的属性，可以是一个方法，也可以是一个表达式**


```js
let name = 'lala';
let obj = {
    a,
    b,
    c() {},
    [name]: 123
}
```

对象合并：

```js
//把后面的合并到前面的对象中
let obj1 = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        f: 4,
        e: 5
    }
};
let obj2 = {
    a: 2,
    d: 4,
    c: {
        d: 6,
        f: 7,
      	g: 9
    }
};

猜猜obj3.c 是否有e 属性？没有

let obj3 = Object.assign(obj1, obj2);
let obj4 = $.extend(true,{},obj1, obj2);

策略：把后面的属性和值查到前面对象中，如果属性和前面的相同，使用后面的代替
会修改本身

会深层次合并么？不会，$.extend(true, {}, {}) 会深度拷贝

```