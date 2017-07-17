module.exports=function(sequelize,DataTypes){
	var Role= sequelize.define('role',{
		id:{
			type:DataTypes.BIGINT(11),
            primaryKey:true,
            autoIncrement: true,
            allowNull:false,
            unique: true
		},	
		name:{
			type:DataTypes.STRING
		},
		

	},{
		freezeTableName: true,
		charset: 'utf8',
    	collate: 'utf8_general_ci'

	});
	return Role;
}