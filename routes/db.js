var express = require('express');
var router = express.Router();
var movieVotesModel = require('../models/movieVotes');
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
  console.log("req.body : ", req.body)
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect( async err => {
    const collection = client.db("ZKDB").collection("MovieSearch");
    try {
      await collection.replaceOne(req.body)
    } catch (error) {
      await collection.insertOne(req.body);
    }
  })
  res.status(201).send('Success!');
  client.close()
});

// PATCH
router.patch('/patch/:vote', function(req, res, next) {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect( async err => {
    const collection = client.db("ZKDB").collection("MovieSearch");
    console.log("client connected! vote param : " + req.params.vote)
    
    if (req.params.vote === "upvote" || req.params.vote === "downvote") {
      const thingToChange = await collection.findOne({'id': req.body.id})
      console.log("req.body : ", req.body)
      console.log("thing to change: ", thingToChange)
      await collection.updateOne({'id': req.body.id}, { '$set' : req.body }) 
      .then(console.log("update made successfully"))
    }
        
  })
  res.status(201).send('Success!');
  client.close()
});


module.exports = router;