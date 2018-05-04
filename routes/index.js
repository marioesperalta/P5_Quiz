var express = require('express');
var router = express.Router();


const Sequelize = require("sequelize");

const {models}=require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'P5_Quiz' });
});
router.get('/credits', function(req, res, next) {
    res.render('credits', { title: 'Victor de Pablo' + ' & ' +
        'Mario Esperalta' });
});
router.get('/quizzes', function(req, res, next) {
    models.quiz.findAll()
        .then(quizzes =>{
            res.render('quizzes',{quizzes});
        })
        .catch(error=> next(error))
});

module.exports = router;