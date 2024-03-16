const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    taskno: {
        type: String,
        required: true // Set required to true for mandatory field
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    progress: {
        type: String,
        required: true
    }, status: {
        type: String,
        required: true
    }, userId: {
        type: String,
        required: true
    }
});

const Task = mongoose.model("Task", taskSchema); // Change the model name to singular form (Task)

module.exports = Task; // Export the Task model
