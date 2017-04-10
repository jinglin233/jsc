/**
 * Created by lin on 2017/4/10.
 */
var express = require("express");//引用express
var app = express();//声明express
var router = express.Router();//引用路由
var newsDb=require('./server/proceed/news');//请求静态地址
newsDb.init(router);//初始路由
app.use("/", router);
app.use("/", express.static(__dirname));
app.listen(8024);