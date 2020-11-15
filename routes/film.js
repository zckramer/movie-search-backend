var express = require('express');
var router = express.Router();

const BASE_URL = "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/"
const dummyData = [{movieTitle:"Beetlejuice"},{movieTitle: "Snow White"}]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('film', { data : res , title : "Hell"});
});

router.get('/:search', function(req, res, next) {
  // search = document.getElementById('searchField').value
  // fetch(BASE_URL + search, ()=> {
  //   console.log(res)
  // })
  // res.send('searching for ' + req.params.search)

  // dummy Test
  res.render('film', { searchResults : dummyData })
})



module.exports = router;
