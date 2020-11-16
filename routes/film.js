var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

const BASE_URL = "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/"
const dummyData = [{movieTitle:"Beetlejuice"},{movieTitle: "Snow White"}]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('film', { searchResults : {} , title : "Movie Search 3k"});
});

router.get('/:search', function(req, res, next) {
  console.log("searching for..." + req.params.search)
  fetch(BASE_URL + req.params.search, 
    {headers: {
      "x-rapidapi-key": "712cf7e599mshd8ec9264a3d789ep1033c0jsn37f3b002f14f",
	    "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
      "useQueryString": true}
    })
    .then(response => response.json())
    .then(data => res.render('film', { searchResults : data }))
})

module.exports = router;

// req.headers({
// 	"x-rapidapi-key": "712cf7e599mshd8ec9264a3d789ep1033c0jsn37f3b002f14f",
// 	"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
// 	"useQueryString": true
// });
