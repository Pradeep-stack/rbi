const mongoose = require('mongoose');

const assignSchema = new mongoose.Schema({
    task_name: {
        type: String,
        required: true
    },
    form_id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
task_date: {
        type: String,
        required: true
    }

})



const AssignTask = mongoose.model('AssignTask', assignSchema);

module.exports = AssignTask;