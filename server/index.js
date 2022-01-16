const Koa = require('koa')
const router = require('koa-router')();
const app = new Koa()
const cors = require('koa2-cors')
const Mock = require('mockjs')
const Random = Mock.Random

const serve = require('koa-static');

const MainData = require('./Data/mainData/MianData.json')
const MyData = require('./Data/myPageData/myPageData.json')
const ClassifyData = require('./Data/classifyData/ClassifyData.json')
const ExampleData = require('./Data/exampleGoodsData/ExampleGoodsData.json')

app.use(serve('./public'));

app.use(cors({
    origin: function(ctx) { //设置允许来自指定域名请求
        // if (ctx.url === '/test') {
        return '*'; // 允许来自所有域名请求
        // }
        // return 'http://localhost:3000'; //只允许http://localhost:8080这个域名的请求
    },
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
}))
router.get('/home/main', async (ctx) => {
    ctx.response.body = {
        success: true,
        data: MainData
    }
})
router.get('/home/list', async(ctx) => {
    // 参数
    let { limit = 20, page = 1} = ctx.request.query
    let data;
    let MockData = Mock.mock({
        'list|20': [{
            'title': '@ctitle(15, 20)',
            'activites|0-1': "@ctitle(3, 5)",
            "tags|1-2": ["@ctitle(2,3)"],
            'imgsrc': Random.image('168x168'),
            "tradeDescription": "@ctitle(4,7)",
            'id|+1': 4,
            "price|2-30.2": 2 
        }]
    })
    if(page == 1) {
        data = {
            "list": [...ExampleData.ExampleGoodsData, ...MockData.list]
        } 
    }else {
        data = MockData
    }
    ctx.body = {
        success: true,
        data
    }
})
router.get('/home/recommend', async(ctx) => {
    let { limit = 20, page = 1} = ctx.request.query
    let data;
    let MockData = Mock.mock({
        'list|20': [{
            'title': '@ctitle(15, 20)',
            "tags|1-2": ["@ctitle(2,3)"],
            'imgsrc': Random.image('140x140'),
            "tradeDescription": "@ctitle(4,7)",
            "numOfPersonPurchased|500-3000": 500, 
            'id|+1': 4,
            "price|2-30.2": 2
        }]
    })
    if(page == 1) {
        data = {
            list: [...ExampleData.ExampleGoodsData, ...MockData.list] 
        }
    }else {
        data = MockData
    }
    ctx.body = {
        success: true,
        data
    }
})
router.get('/home/my', async(ctx) => {
    ctx.body = {
        success: true,
        data: MyData
    }
})
router.get('/home/classify/goodsData', async(ctx) => {
    const {limit, page, type} = ctx.request.query
    let data;
    let MockData = Mock.mock({
        'list|20': [{
            'title': '@ctitle(15, 20)',
            "tags|1-2": ["@ctitle(2,3)"],
            'imgsrc': Random.image('100x100'),
            "tradeDescription": "@ctitle(4,7)",
            "numOfPersonPurchased|500-3000": 500, 
            'id|+1': 4,
            "price|2-30.2": 2
        }]
    })
    if(page == 1) {
        data = {
            list: [...ExampleData.ExampleGoodsData, ...MockData.list]
        } 
    }else {
        data = MockData
    }
    ctx.body = {
        success: true,
        data: data
    }
})
router.get('/home/classify', async(ctx) => {
    ctx.body = {
        success: true,
        data: ClassifyData
    }
})
router.get('/detail/:id', async(ctx) => {
    const { id } = ctx.params
    if(id < 4) {
        ctx.body = {
            success: true,
            data: ExampleData.ExampleGoodsData[id-1]
        }
    } else {
        ctx.body = {
            success: true,
            data: ExampleData.ExampleGoodsData[3]
        }
    }
})
app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(1314, () => {
    console.log('server is running in port 1314');
})