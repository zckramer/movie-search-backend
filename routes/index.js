var express = require('express');
var router = express.Router();

// IMDB API Fetch
const BASE_URL = "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/";
// const searchString = document.getElementById("inputString").value;
// const query = BASE_URL + searchString;



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Movie Search 3k' });
});

module.exports = router;
