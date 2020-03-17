const mongoose = require('mongoose');

const boda_name_schema = mongoose.Schema({
  firstname:String,
  lastname:String,
  nickname:String,
})

mongoose.model('Boda',boda_name_schema);