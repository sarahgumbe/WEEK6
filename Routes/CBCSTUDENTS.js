const express = require('express');
const cbcstudentsModel = require('./../Models/cbcstudents');

const router = express.Router();

// CRUD Operations
//Get
router.get('/', async function(req, res){
    try {
        const data = await cbcstudentsModel.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
    
});

//POST
router.post('/', async function(req,res){
    const data = new cbcstudentsModel({
        branchname: req.body.branchname,
        Class:req.body.Class,
        Student:req.body.Student,
        });

        try {
            const dataTosave = await data.save();
            res.status(200).json(dataTosave);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    });


    //UPDATE/patch
    router.patch('/:id', async function (req, res) {
        const id = req.params.id; 
        const updatedData = req.body;
        
        try {
            const dataUpdate = await cbcstudentsModel.findByIdAndUpdate(id,
                updatedData, { new: true });
                res.status(200).json(dataUpdate);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
//DELETE
router.delete('/:id', async function(req,res){
    const id = req.params.id;
    try {
        const dataDelete = await cbcstudentsModel.findByIdAndDelete(id);
            res.status(200).json(dataDelete);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports=router;

