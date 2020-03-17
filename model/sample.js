const mongoose = require('mongoose');

const boda_name_schema = mongoose.Schema({
  firstname:String,
  lastname:String,
  nickname:String,
})

const rider = mongoose.model('rider',boda_name_schema);
module.exports=rider;