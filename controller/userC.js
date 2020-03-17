//const Boda = require('../model/sample')
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const bodaSchema = new Schema({
  firstname:String,
  lastname:String,
  nickname:String,
});

const rider = mongoose.model('rider',bodaSchema);

//Get home page
exports.boda_list = (req,res)=>{
  res.send('implement home page here')
};


//Get request for creating boda rider
module.exports.boda_rider_create_get = (req,res)=>{
    res.render('sample')
};

//Post request for creating boda rider
exports.boda_rider_create_post = async (req,res)=>{
let person = new rider(req.body)
try{person.save((err)=>{
  console.error(err);
  console.log(person)
})}
  catch(error){console.error('failed')}
}

//Get request to delete boda rider
exports.boda_rider_delete_get = async (req,res)=>{
 res.send('implement the boda delete _get')
};

//Post request for creating boda rider
exports.boda_rider_delete_post = (req,res)=>{
  res.send('implement the boda create form_post')
};


//Get request to delete boda rider
exports.boda_rider_delete_get = (req,res)=>{
  res.send('implement the boda delete form_get')
};

//Post request to delete boda rider
exports.boda_rider_delete_post = (req,res)=>{
  res.send('implement the boda delete form_post')
};


//Get request to update boda rider
exports.boda_rider_update_get = (req,res)=>{
  res.send('implement update for boda rider_get')
};

//Post request for update boda rider
exports.boda_rider_update_post = (req,res)=>{
  res.send('implement update for boda rider_post')
};


//Get request for one boda rider
exports.boda_rider_detail_get = (req,res)=>{
  res.send('implement the get for one boda')
};

//Get request for a list of all boda riders
exports.boda_rider_list_get = (req,res)=>{
  res.send('implement the boda rider list')
};