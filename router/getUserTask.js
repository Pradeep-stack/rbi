const express = require('express');
const router = express.Router();
const AssignTask = require("../model/assignTask")

router.get('/usertask',async (req, res) => {
    try {
        const users = await AssignTask.findById({})
        res.send(users)
    } catch (err) {
        res.status(400).send(err)
    }
});


router.get('/usertask/:user_id',async (req, res) => {
    try {
        const user_id = req.params.user_id
        const users = await AssignTask.findById({user_id})
        res.send(users)
    } catch (err) {
        res.status(400).send(err)
    }
});

module.exports = router;