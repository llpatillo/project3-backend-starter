var express = require('express');
var router = express.Router();
const Candidate = require('../models').Candidate;
const Background = require('../models').Background;
const Viewpoint = require('../models').Viewpoint;



// GET all canadates
router.get('/', (req,res) => {
    Candidate.findAll()
    .then(candidates => {
        res.json({ candidates })
    })
})

// GET a candidate
router.get('/:id', (req,res) => {
    Candidate.findByPk(req.params.id, {
        include: [
            { 
                model: Background
            },
            {
                model: Viewpoint
            }
        ]
    })
    .then(candidates => {
        res.json(candidates)
    })
})





module.exports = router;