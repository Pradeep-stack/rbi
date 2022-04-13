const express = require('express');
const router = express.Router();
const AssignTask = require("../model/assignTask");

router.post("/assigntask", async (req,res)=>{
    console.log(req.body)
    const { task_name, form_id, user_id, task_date} = req.body;

    if (!task_name || !form_id|| !user_id || !task_date ) {
        return res.status(422).json({ erorr: "Please filled the fild properly" });
    }
     try {
        const task = new AssignTask({ task_name, form_id, user_id, task_date});
        await task.save();

        res.status(201).json({ message: "task assign succefully" });

    } catch (err) {
        console.log(err);
    }
}) 


router.get('/tasklist', async (req, res) => {
    try {
        const tasks = await AssignTask.find({})
        res.send(tasks)
    } catch (err) {
        res.status(400).send(err)
    }
});

+
router.get('/tasklist/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const user = await AssignTask.findById({_id})
        res.send(user)
    } catch (err) {
        res.status(500).send(err)
    }
});


router.patch('/task/update/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const task = await AssignTask.findByIdAndUpdate(_id, req.body, {
            new: true
        } )
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
});

router.delete('/tasklist/delete/:id', async (req, res) => {
    try {
       
        const task = await AssignTask.findByIdAndDelete(req.params.id) 
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
});




module.exports = router;