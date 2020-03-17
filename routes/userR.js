const express = require('express');

const router = express.Router();
//requiring the controllers
const boda_control = require('../controller/userC');

//Get home page
router.get('/',boda_control.boda_list);


// //Get request for creating boda rider
router.get('/bodarider/create',boda_control.boda_rider_create_get);

// //Post request for creating boda rider
router.post('/bodarider/create',boda_control.boda_rider_create_post);


// //Get request to delete a boda rider
router.get('/bodarider/:id/delete',boda_control.boda_rider_delete_get);

// //Post request to delete a boda rider
router.post('/bodarider/:id/delete',boda_control.boda_rider_delete_post);


// //Get request to update boda rider
router.get('/bodarider/:id/create',boda_control.boda_rider_update_get);

// //Post request to update a boda rider
router.post('/bodarider/:id/create',boda_control.boda_rider_update_post);


// //Get request for one boda rider
router.get('/bodarider/:id',boda_control.boda_rider_detail_get);

// //Get request for a list of all boda riders
router.get('/bodarider',boda_control.boda_rider_list_get);


module.exports = router;