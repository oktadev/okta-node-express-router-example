const express = require('express')

const router = express.Router()

let todo = []

router.post('/', (req, res, next) => {
  todo = [...req.body.todo || []]
  if (req.body.remove) todo.splice(req.body.remove, 1)
  if (req.body.new) todo.push({})

  next()
})

router.use('/', (req, res) => {
  res.render('todo', { title: 'To-do list', todo })
})

module.exports = router
