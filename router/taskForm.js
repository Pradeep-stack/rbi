const express = require('express');
const router = express.Router();
const TaskForm = require("../model/taskForm")

router.post('/addtask', async (req, res) => {
console.log(req.body)
    const {name, titale, body} = req.body;

    if (!name || !titale || !body) {
        return res.status(422).json({ erorr: "Please filled the fild properly" });
    }
     try {
        const task = new Task({name, titale, body});
        await task.save();

        res.status(201).json({ message: "user add succefully" });

    } catch (err) {
        console.log(err);

    }
});
router.post('/forms', async (req, res) => {
    console.log(req.body)
        const {id, name, title, link} = req.body;
    
        if (!id || !name || !title|| !link) {
            return res.status(422).json({ erorr: "Please filled the fild properly" });
        }
         try {
            const task = new TaskForm({id, name, title, link});
            await task.save();
    
            res.status(201).json({ message: "user add succefully" });
    
        } catch (err) {
            console.log(err);
    
        }
    });

router.get('/formslist', async (req, res) => {
    try {
        const tasks = await TaskForm.find({})
        res.send(tasks)
    } catch (err) {
        res.status(400).send(err)
    }
});

router.get('/task/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const task = await Task.findById({_id})
        res.send(task)
    } catch (err) {
        res.status(500).send(err)
    }
});


router.patch('/task_update/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const task = await Task.findByIdAndUpdate(_id, req.body, {
            new: true
        } )
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
});

router.delete('/task_delete/:id', async (req, res) => {
    try {
       
        const task = await Task.findByIdAndDelete(req.params.id) 
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
});

module.exports = router;