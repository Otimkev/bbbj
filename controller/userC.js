//const Boda = require('../model/sample')
const mongoose = require('mongoose');
const rider = require('../model/sample')

//Get home page
exports.boda_index = (req,res)=>{
  res.render('index',{title:'welcome to Bodaboda Banja'})
};


//Get request for creating boda rider
module.exports.boda_rider_create_get = (req,res)=>{
    res.render('boda_form',{title:'Register rider'})
};

//Post request for creating boda rider
exports.boda_rider_create_post = async (req,res)=>{
let person = new rider({
  firstname:req.body.firstname,
  lastname:req.body.lastname,
  nickname:req.body.nickname,
});
try{
  let item = await person.save()
  console.log(item)
}
catch(err){
  res.json({message:err})
}
};


//Get request to delete boda rider
exports.boda_rider_delete_get = async (req,res)=>{
 res.send('implement the boda delete _get')
};

//Post request to delete boda rider
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
exports.boda_rider_list_get = async (req,res)=>{
  try{
    const Rider = await rider.find();
  res.render('list',{title:'List of Registered riders',boda:Rider});
  }catch(err){
    res.json({message:err});
  }
}