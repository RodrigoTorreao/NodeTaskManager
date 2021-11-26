const express = require('express')
const router = express.Router()
const {getAllTasks, createTask, updateTask} = require('../controllers/tasks')


router.route('/').get(getAllTasks).post(createTask)
router.route('/id:').patch(updateTask)


module.exports = router