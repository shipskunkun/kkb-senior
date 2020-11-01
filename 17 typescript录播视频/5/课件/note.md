1. ts 中类的构造函数有何不同？

```js
constructor(
  	public id: number,
    public username: string
  ) {
    // 可以省略初始化赋值
  }
```

在参数后面添加类型标注，后面加上对象，添加类型初始化



2. 当子类继承父类，如何调用构造函数？

   当子类使用 extends 继承父类后

   如果没有 constructor， 会在默认的  constructor 中调用super

   如果子类显示调用 constructor， 那么，必须显示调用 super， 只有在 `super(//参数)` 之后才能访问 `this`

   通过super 调用父类中的方法，当然this仍然指向子类，super.postArticle(title, content);

   如何理解这句话，看编译后的代码

   ```
   constructor(
     		id: number,
         username: string,
         public score = 0
       ) {
           super(id, username);
       }
   ```

    

编译后的 代码：

```js
var VIP = /** @class */ (function (_super) {
    __extends(VIP, _super);
    function VIP(id, username, score) {
        var _this = _super.call(this, id, username) || this;
        _this.score = score;
        // 必须在super调用之后才能访问 this
        console.log('子类构造函数');
        return _this;
    }
    };
    return VIP;
}(User));
```



重写和重载：

重写：方法名，参数个数、类型一样，方法重写，覆盖

重载：参数个数，参数类型不同



类的修饰符，public，protected

get、set

static， 该成员属性或方法是类型的特征还是实例化对象的特征



抽象类，是什么

抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不能new 实例化。

 `abstract`关键字是用于定义抽象类和在抽象类内部定义抽象方法。

抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 



类与接口，什么时候使用接口，什么时候使用抽象类？

1. 接口，编译后，不会生成相关代码，抽象类编译后会有代码
2. 类可以实现多个接口，但是只能单继承



构造函数类型，类类型

后者：class

前者：























