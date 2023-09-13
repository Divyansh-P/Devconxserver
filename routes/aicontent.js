const express=require('express')
const router=express.Router()
const aicontroller=require('../controllers/aicontent')
const {titlegen,ideasgen,gmore,taggen,analysegen,conclusiongen}=aicontroller

router.post("/title", titlegen);
router.post("/ideas",ideasgen);
router.post("/more",gmore);
router.post("/tagsuggest",taggen);
router.post("/analyse",analysegen);
router.post("/conclusion",conclusiongen);

module.exports=router