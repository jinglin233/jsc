/**
 * Created by lin on 2017/4/10.
 */
var Sequelize=require("sequelize");//请求sequelize
var baseConf=require("../configurations/database");//关联数据库信息
var mysqlConf=baseConf.mysql;

var sequelize=new Sequelize(
	mysqlConf.database,
	mysqlConf.user,
	mysqlConf.password,
	{
		host:mysqlConf.host,
		port:3306,
		dialect:mysqlConf.dialect,
		pool:{
			max:5,
			min:0,
			idle:1000
		},
		storage:'path/to/database.sqlite'
	});

var News=sequelize.define('lofterInfo',{
	id:{
		type:Sequelize.STRING,
		primaryKey:true
	},
	title:{
		type:Sequelize.STRING
	},
	password:{
		type:Sequelize.STRING
	},
	phoneNumber:{
		type:Sequelize.STRING
	},
	email:{
		type:Sequelize.STRING
	},
	nickName:{
		type:Sequelize.STRING
	},
	realName:{
		type:Sequelize.STRING
	},
	gender:{
		type:Sequelize.INTEGER
	},
	age:{
		type:Sequelize.INTEGER
	},
	qq:{
		type:Sequelize.STRING
	},
	remark:{
		type:Sequelize.STRING
	}
},{
	freezeTableName:true
});
var Document=sequelize.define('documentInfo',{
	id:{
		type:Sequelize.STRING,
		primaryKey:true
	},
	title:{
		type:Sequelize.STRING
	},
	type:{
		type:Sequelize.STRING
	},
	content :{
		type:Sequelize.STRING
	},
	author  :{
		type:Sequelize.STRING
	},
	avator  :{
		type:Sequelize.STRING
	},
	remark  :{
		type:Sequelize.STRING
	}
},{
	freezeTableName:true
});

//暴露出创建的函数
exports.createUser=function () {
	return User.sync().then(function () {
		return User.create({
			id:"id"+Math.random(),
			userName:'Hancock',
			password:'a121212'
		});
	});
};
exports.createDocument=function () {
	return Document.sync().then(function () {
		return Document.create({
			id:"id"+Math.random(),
			userName:'Lin`',
			password:'lin123456'
		});
	});
};
exports.getUser=function () {
	return User.findAll();
};
exports.getDocument=function () {
	return Document.sync().then(function () {
		return Document.findAll();

	});
};
