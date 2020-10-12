
// 注意两者的区别！

// module.exports={
//     name:"张三",
//     age:20
// }
module.exports.name = "李四";
module.exports.age = 456;

exports.name2 = "张三";
exports.age2 = 20;

exports = {
        name:"张三",
        age:20
    }
// npm i 模块名称； -g;