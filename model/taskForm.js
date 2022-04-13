const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    id: {
        type: String,
        required:true
    },
    name: {
        type: String,
        required:true
    },
    title: {
         type: String,
        required:true
    } ,
     link: {
        type: String,
        required:true
    },

})



const TaskForm = mongoose.model('TaskForm', taskSchema);

module.exports = TaskForm;