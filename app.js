const express = require('express')
const connectDB = require('./db/connect')
const tasks = require('./routes/tasks')
require('dotenv').config()

const app = express()
//Middleware
app.use(express.json())

//Routes
app.use('/api/v1/tasks', tasks)

//Start
const start = async() => {
    try {
        await connectDB(process.env.mongouri)
        app.listen(5000)
    } catch (error) {
        console.log(error)
    }
}

start()