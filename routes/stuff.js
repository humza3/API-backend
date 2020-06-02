const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');


//retreive and list sauces for sale
router.get('/', stuffCtrl.getAllSauce);
//save sauces to the database
router.post('/', stuffCtrl.createSauce);
//display a single sauce on  a page
router.get('/:id', stuffCtrl.getOneSauce);
//update suaces with modifications
router.put('/:id', stuffCtrl.modifySauce);
//deletesauce from database and page
router.delete('/:id', stuffCtrl.deleteSauce);


module.exports = router;