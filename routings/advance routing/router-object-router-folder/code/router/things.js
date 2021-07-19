var express = require('express');
let router=express.Router();

//hear using router instead of app
router
.route("/cars")
/**
 * !thisis common in all the routes no need
*  !to write things becuse i 
* !will use it to serarch in app js file*/
.get( (req, res) => {
    res.send("hello all im car")
})
.post( (req, res) => {
    res.send("hello all")
})
.put( (req, res) => {
    res.send("hello all")
})
.delete( (req, res) => {
    res.send("hello all")
});




router
.route("/tempo")
.get( (req, res) => {
    res.send("hello all tempo")
})
.post( (req, res) => {
    res.send("hello all")
})
.put( (req, res) => {
    res.send("hello all")
})
.delete( (req, res) => {
    res.send("hello all")
});

router
.route("/tempo/small")
.get( (req, res) => {
    res.send("hello all tempo small")
})
.post( (req, res) => {
    res.send("hello all")
})
.put( (req, res) => {
    res.send("hello all")
})
.delete( (req, res) => {
    res.send("hello all")
});

router
.route("/tempo/small/black")
.get( (req, res) => {
    res.send("hello all tempo small black")
})
.post( (req, res) => {
    res.send("hello all")
})
.put( (req, res) => {
    res.send("hello all")
})
.delete( (req, res) => {
    res.send("hello all")
});

router
.route("/tempo/small/black")
.get( (req, res) => {
    res.send("hello all tempo small black")
})
.post( (req, res) => {
    res.send("hello all")
})
.put( (req, res) => {
    res.send("hello all")
})
.delete( (req, res) => {
    res.send("hello all")
});

router
.route("/tempo/small/black/:id")
.get( (req, res) => {
    res.send("hello all tempo small black"+req.params.id)
})
.post( (req, res) => {
    res.send("hello all")
})
.put( (req, res) => {
    res.send("hello all")
})
.delete( (req, res) => {
    res.send("hello all")
});



module.exports=router;
