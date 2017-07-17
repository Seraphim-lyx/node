var sqldb = require('../sqldb/index.js');
var transaction = require('sequelize').Transaction;
var Sequelize = require('sequelize');
var sequelize = sqldb.sequelize;



exports.createUser=function(req,res){
	var User = sqldb.User;
	var Role= sqldb.Role;
	// return sequelize.transaction(function(t){
 //        return role.create({name:'fuck3'})
 //        .then(function(r){
 //        	var u=user.build({name:'ss2'});
 //        	r.setUser(u);
	// 	})
 //    	.catch(function(err){
 //        	console.log(err);
 //    	})

 //    })
	return sequelize.transaction(function(t){
		return Role.findById({where:{id:req.body.roleId}})
			.then(function(role){
				var user=User.build({
					name:req.body.name,
					// age:req.body.age;

				});
				role.setUser(user);
			});
	});
    
};

exports.findAllUser=function(){

	var User = sqldb.User;
	return sequelize.transaction(function(t){
		return User.findAll()
			.then(function(user){

				return user;
			})
			.catch(function(err){
				console.log(err);
			});
		
	});
	
			
};
exports.updateUser=function(req,res){
	var User=sqldb.User;
	return sequelize.transaction(function(t){
		return User.update({
			name:'test',
			age: '12',
			height: '13',
			weight: '14'
		},{
			where:{id:1}
		})
		.catch(function(err){
			console.log(err);
		})
	})
}
exports.deleteUser=function(req,res){
	var User = sqldb.User;
	return sequelize.transaction(function(t){
		return User.destroy({where:{id:req.body.id}})
			.catch(function(err){
				console.log(err);
			});
	});

};