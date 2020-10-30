1. 如何执行 ts 文件

```js
tsc ./src/helloKaiKeBa.ts
```

默认情况下会在当前文件所在目录下生成同名的 `js` 文件



注意，这个操作在哪个目录下执行？  ./ 代表当前目录。所以要在helloKaiKeBa.ts 上层中执行该命令

```
tsc --outDir ./dist ./src/helloKaiKeBa.ts
```



2. `tsconfig.json`  配置哪些东西

```js
{
    "compilerOptions": {
        "outDir": "./dist",   // 输出目录
        "target": "ES2015",   //指定编译的代码版本目标，默认为 ES3
    "watch": true,            //在监听模式下运行，当文件发生改变的时候自动编译
    },
  // ** : 所有目录（包括子目录）
  // * : 所有文件，也可以指定类型 *.ts
  "include": ["./src/**/*"]
}
  
//指定加载的配置文件
tsc -p ./configs/ts.json
```

