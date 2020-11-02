node 中的模块化规范，commonjs

浏览器中的模块化加载， AMD、CMD

​	不同点：

+ 前者是同步，后者是异步模块化定义
+ ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。比如，CommonJS 模块就是对象，输入时必须查找对象属性，这种加载称为“运行时加载”，因为只有运行时才能得到这个对象，导致完全没办法在编译时做“静态优化”。
+ export 语句输出的接口，对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。CommonJS 模块输出的是值的缓存，不存在动态更新，详见下文《Module 的加载实现》一节。
+ 







AMD : requirejs

define, require



UMD , 解决方案，如何解决同构，判断当前支持哪种规范



8-4 

open with live server， 可以通过本地欺负的方式，打开html文件，也无需装 express 等插件，完美！

vscode 中安装插件，live server



复习，es6 export 语法

除了静态加载带来的各种好处，ES6 模块还有以下好处。

- 不再需要`UMD`模块格式了，将来服务器和浏览器都会支持 ES6 模块格式。目前，通过各种工具库，其实已经做到了这一点。
- 将来浏览器的新 API 就能用模块格式提供，不再必须做成全局变量或者`navigator`对象的属性。
- 不再需要对象作为命名空间（比如`Math`对象），未来这些功能可以通过模块提供。





export 输出变量

```javascript
export { firstName, lastName, year };
```



default

为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到`export default`命令，为模块指定默认输出。

```javascript
// export-default.js
export default function () {
  console.log('foo');
}
```

上面代码是一个模块文件`export-default.js`，它的默认输出是一个函数。

其他模块加载该模块时，`import`命令可以为该匿名函数指定任意名字。

想起什么名字起什么名字。这时`import`命令后面，不使用大括号。

```javascript
// import-default.js
import customName from './export-default';
customName(); // 'foo'
```

显然，一个模块只能有一个默认输出，因此`export default`命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能唯一对应`export default`命令。





静态导入

```js
import v, {x, y} from './b.js';
```

动态导入

```js
import('./b.js').then(data => {
        // console.log(data);
        console.log(data.x, data.y, data.default)
    });

```



ts 中：

不使用 import、export 定义的，变量属于全局变量，这是我们不希望的

tsconfig.json 文件，中 target 参数，指定编译成 某个模块系统的代码，如 编译成 ES5， 编译成 ES6



当查找的目标文件，没有 ./  时候，非相对查找，递归向上查找









