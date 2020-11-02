node 中的模块化规范，commonjs

浏览器中的模块化加载， AMD、CMD

​	不同点：

+ 异步的模块化定义
+ ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。比如，CommonJS 模块就是对象，输入时必须查找对象属性。
+ 



AMD : requirejs

define, require



UMD , 解决方案，如何解决同构，判断当前支持哪种规范



8-4 

open with live server， 可以通过本地欺负的方式，打开html文件，也无需装 express 等插件，完美！

vscode 中安装插件，live server