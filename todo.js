const express = require('express')

const router = express.Router()

const todosByUser = {}

router.post('/', (req, res, next) => {
  const todo = [...req.body.todo || []]
  if (req.body.remove) todo.splice(req.body.remove, 1)
  if (req.body.new) todo.push({})

  todosByUser[req.userContext.userinfo.sub] = todo

  next()
})

router.use('/', (req, res) => {
  const todo = todosByUser[req.userContext.userinfo.sub] || []

  res.render('todo', { title: 'To-do list', todo, userinfo: req.userContext.userinfo })
})

module.exports = router
