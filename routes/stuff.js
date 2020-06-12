const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


const stuffCtrl = require('../controllers/stuff');


//retreive and list sauces for sale
router.get('/', auth, stuffCtrl.getAllSauce);
//save sauces to the database
router.post('/', auth, multer, stuffCtrl.createSauce);
//display a single sauce on  a page
router.get('/:id', auth, stuffCtrl.getOneSauce);
//update suaces with modifications
router.put('/:id', auth, multer, stuffCtrl.modifySauce);
//deletesauce from database and page
router.delete('/:id', auth, stuffCtrl.deleteSauce);
//like a sauce
router.post('/:id/like', auth, stuffCtrl.likeSauce);
//dislike a sauce
router.post('/:id/like', auth, stuffCtrl.dislikeSauce);

module.exports = router;