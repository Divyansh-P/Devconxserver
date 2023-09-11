const express=require('express')
const router=express.Router()
const aicontroller=require('../controllers/aicontent')
const {titlegen,ideasgen,gmore}=aicontroller

router.post("/title", titlegen);
router.post("/ideas",ideasgen);
router.post("/more",gmore);

module.exports=router