var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

const BASE_URL = "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/"

// Search route
router.get('/:search', function(req, res, next) {
  console.log("search params = ", req.params.search)
  fetch(BASE_URL + req.params.search, 
    {headers: {
      "x-rapidapi-key": "712cf7e599mshd8ec9264a3d789ep1033c0jsn37f3b002f14f",
	    "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
      "useQueryString": true
    }}
  )
    .then(response => response.json())
    .then(data => res.send({ data }))
})

module.exports = router;