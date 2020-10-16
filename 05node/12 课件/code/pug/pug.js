
// cnpm i koa koa-router koa-views pug -s
const Koa = require('koa')
const Router = require('koa-router')
const views = require('koa-views')
let app = new Koa();
let router = new Router();
app.use(views(__dirname + "/views"), {
    map: {
        html: "pug"
    }
})

router.get('/', async ctx => {
    await ctx.render('index.pug')
})

app.use(router.routes())
app.listen(3000)


