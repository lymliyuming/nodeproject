const express=require('express');
const path=require("path");
const cookiepa=require("cookie-parser")
const app=express();

//引入处理不同功能的路由中间件函数
const bannerrouter=require('./routes/bannernode');
const indexrouter=require('./routes/indexnode');
const userrouter=require('./routes/usernode');
//设置静态资源托管文件夹
app.use(express.static(path.resolve(__dirname, './public')));
//设置cookie中间件
app.use(cookiepa());
//模板引擎在何路径并设置ejs引擎
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');
//设置body中间件函数
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/',indexrouter);
app.use('/user',userrouter);
app.use('/banner',bannerrouter)

app.listen(8090);
console.log("服务器已启动");