const express = require('express')
const { randomBytes } = require('crypto')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

// In memory comments
const commentsByPostId = {}

app.get('/posts/:id/comments', (req, res) => {
  const { id } = req.params

  res.send(commentsByPostId[id] || [])
})

app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex')
  const { content } = req.body
  const { id } = req.params

  const comments = commentsByPostId[id] || []
  comments.push({ id: commentId, content })
  commentsByPostId[id] = comments

  res.status(201).send(comments)
})

app.listen(4001, () => console.log('Listening on 4001'))
