var express = require('express');
var movieVotesModel = require('../models/movieVotes');

var router = express.Router();

const MongoClient = require('mongodb').MongoClient;


const url = "mongodb+srv://zckramer:spicegirls@personalprojectcluster.6nak7.mongodb.net/ZKDB?retryWrites=true&w=majority"

// GET db data
router.get('/:movieID', async function(req, res, next) {
  let data;
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect( async err => {
    const collection = client.db("ZKDB").collection("MovieSearch");
    const cursor = await collection.findOne({'id': req.params.movieID});

    if (cursor != null){
      data = cursor
      console.log("Return Data: ", data) 
      res.send(data);
    } else {
      res.send(movieVotesModel);
    }

  })
  client.close()
})

// INSERT data (insertOne)
router.post('/insert', function(req, res, next) {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect( async err => {
    const collection = client.db("ZKDB").collection("MovieSearch");
    await collection.insertOne(req.body);
  })
  res.status(201).send('Success!');
  client.close()
});

module.exports = router;