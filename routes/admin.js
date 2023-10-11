const express = require('express');

const router = express.Router();

router.get('/add-products',(req,res,next)=>{
    //console.log("in the middle");
    res.send('<form action="/admin/add-product" method="POST"><label>Product:</label><input type="text" name="title"><label>Quantity:</label><input type="number" name="size"><button type="submit">Add Product</button></form>')
    //next();
})

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop/')
})

module.exports = router;
