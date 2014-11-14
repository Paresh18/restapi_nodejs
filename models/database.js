var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var dataSchema = new Schema(
{
    name :{
	type :String,
	required:true,
	trim:true,
	index:{
	unique:true
	}
	}
	, description :{
	type :String,
	required:true
	}
	,data_created :{
	type:Date,
	required:true,
	default:Date.now
	}
	});
	
var database = mongoose.model('database',dataSchema);

module.exports = 
{
data:database
};