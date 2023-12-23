const express = require('express')
const {join} = require("path");

const directories = require('../util/directories')


const router=express.Router()

//Users route
router.get('/users',(req,res)=>{
res.sendFile(join(directories.root,'views','users.html'))
})

module.exports = router;