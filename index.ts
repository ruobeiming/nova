import Koa from 'koa';
const app = new Koa();

app.use(async ctx => {
    if (ctx.url === '/receiver') {
        ctx.body = 'this is receiver path';
    } else {
        ctx.body = 'what r u doing new bee';
    }
});

console.log('hello world');

app.listen(3000);
