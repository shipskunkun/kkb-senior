
// sudo cnpm i koa koa -router  koa-nunjusks-2 -s
const Koa = require('koa')
const Router = require('koa-router')
const nunjucks = require('koa-nunjucks-2')
let app = new Koa();
let router = new Router();
app.use(nunjucks({
    ext: 'html',
    path: __dirname + "/views",
    nunjucksConfig: {
        trimBlocks: true // 防止xss漏洞
    }
}))
router.register("/", async ctx => {
    // ctx.body = "hello"
    await ctx.render('index')
})
app.listen(8000)