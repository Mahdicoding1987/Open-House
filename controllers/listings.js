const express = require('express');
const router = express.Router();

const Listing = require('../models/listing');

router.get('/', async(req, res) => {
    try{

        const listings = await Listing.find({});
        console.log('listings:', listings);
        res.render('listings/index.ejs');

    }catch(err){
        console.log(error);
    }

  });

module.exports = router;