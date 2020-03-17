const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BodaRiderSchema = new Schema({
  names:{
   type:String,
   required:true
  },
  current_date:{
   type:Date,
   default:Date.now
  },
  phone_numbers:{
   type:Number,
   required: true
  },
  nationality:{
   type:String
  },
  NIN:{
   type:String
  },
 date_Of_birth:{
  type:Date,
  required:true
 },
 type_of_vehicle:{
  type:String,
  enum:['motorcycle','trycycle'],
  required:true
 },
 reffere_name:{
  type:String,
  required:true
 },
 reffere_phone_number:{
  type:Number,
  required:true
 },
 reffere_occupation:{
  type:String,
  required:true
 },
 date_Of_birth_reffere:{
  type:Date
 },
 down_payment:{
  type:Number,
  required:true,
  enum:[214590,294590]
 },
 marital_status:{
  type:String,
  enum:['married','single','engaged','devoced'],
  required:true
 },
 other_loans:{
  type:String
 },
 stage_name:{
  type:String,
  enum:['lc1','lc3']
 }
 });

module.exports = mongoose.model('boda',BodaRiderSchema);