var express = require('express');
var router = express.Router();
const Comment= require('../models').Comment;


//CREATE a comment

router.post('/', (req, res) => {
    Comment.create({your_name: req.body.your_name, comment: req.body.comment, candidate_id: req.body.candidate_id})
    .then(newComment => {
        res.json ({ comment: newComment })
    })
});
// GET comments
router.get('/', (req, res) => {
    Comment.findAll()
      
    .then(comments => {
        res.json({ comments })
    })
});

//UPDATE a comment
router.put('/:id', (req, res) => {
    Comment.update(req.body, {
        where: {id: req.params.id}
    })
    .then (() => {
        return Comment.findByPk(req.params.id)
    })
    .then(comment => {
        res.json({ comment })
    })
  })

//DELETE a comment
router.delete('/:id', (req, res) => {
    Comment.destroy({ where: {id: req.params.id } })
      .then(() => {
        return Comment.findAll()
      })
      .then(comments => {
        res.json({ comments })
      })
  })













module.exports = router;