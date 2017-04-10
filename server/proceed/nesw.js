/**
 * Created by lin on 2017/4/10.
 */
var dbSequelize = require('../sequelize-mysql/data-base');
exports.init = function(router){
	router.get("/updateNews",function(req,res){
		dbSequelize.createNews().then(function(r){
			var result = {
				id:r.dataValues.id,
				userName:r.dataValues.userName,
				createAt:r.dataValues.createdAt,
				updateAt:r.dataValues.updatedAt
			};
			res.json(result);
		});
	});

	router.post("/updateNews",function(req,res){
		dbSequelize.createNews().then(function(r){
			var result = {
				id:r.dataValues.id,
				userName:r.dataValues.userName,
				createAt:r.dataValues.createdAt,
				updateAt:r.dataValues.updatedAt
			};
			res.json(result);
		});
	});

	router.get("/findNews",function(req,res){
		dbSequelize.getNews().then(function(r){
			var result = {
				status:0,
				message:"",
				contents:[]
			};
			r.forEach(function(rTemp){
				var data = {
					id:rTemp.dataValues.id,
					userName:rTemp.dataValues.userName,
					createAt:rTemp.dataValues.createdAt,
					updateAt:rTemp.dataValues.updatedAt
				};
				result.contents.push(data);
			});
			res.json(result);
		});
	});

};