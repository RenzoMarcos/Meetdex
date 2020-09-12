const express = require('express')
const user = require('../controllers/user')
const api = express.Router()

api.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

api.get('/', function(req, res){
    res.render("index")
})

api.get('/meet', function(req, res){
    res.render("meet")
})
api.get('/zoom', function(req, res){
    res.render("zoom")
})
api.get('/teams', function(req, res){
    res.render("teams")
})
api.get('/catalogo', function(req, res){
    res.render("catalogo")
})
api.get('/signup', function(req, res){
    res.render("signup")
})
api.get('/signin', function(req, res){
    res.render("signin")
})
api.get('/perfil', function(req, res){
    res.render("perfil")
})
api.get('/tienda', function(req, res){
    res.render("tienda")
})
api.get('/videos', function(req, res){
    res.render("videos")
})
api.post('/user', user)

module.exports = api