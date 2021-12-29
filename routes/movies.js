const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

router.get('/movies', (req, res)=>{
    Movie.find({})
    .then ((movie)=>{
        console.log(movie)
        res.render('movies', {movie})
    })
})

router.get('/movies/:id',(req, res)=>{
    const {id} = req.params;
    Movie.findById(id)
    .then((movie)=>{
        res.render('detail', {movie: movie})
    })
    .catch(error=>{
        console.log('Error detail: ',error)
    })
})


module.exports = router;
