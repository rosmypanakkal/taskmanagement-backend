

const mongoose = require("mongoose");
const Task = require('../Models/taskSchema');

exports.addUserTask = async (req, res) => {
    try {
        // Extract user ID from request payload
        const userId = req.payload;

        // Extract task details from request body
        const { taskno, name,description, startDate,endDate,progress ,status} = req.body;

        console.log(userId,taskno,name,description,startDate,endDate,progress,status);

        // Check if task name already exists
        const existingTask = await Task.findOne({ name });

        if (existingTask) {
            // If task with the same name already exists, return a 402 status code
            return res.status(402).json("Task already exists");
        }

        // Create a new task
        const newTask = new Task({
            
            taskno,
            name,
            description,
            startDate,
            endDate,
            progress,
            status,
            userId // Associate task with user ID
        });

        // Save the new task to the database
        await newTask.save();

        // Return a success response
        res.status(200).json(newTask);
    } catch (err) {
        // Handle errors
        console.error("Error adding user task:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};
