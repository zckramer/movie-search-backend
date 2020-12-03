var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var assert = require('assert');

const url = "mongodb+srv://zckramer:spicegirls@personalprojectcluster.6nak7.mongodb.net/ZKDB?retryWrites=true&w=majority"

// GET db data
router.get('/:movieID', async function(req, res, next) {
  let data;
  const MongoClient = require('mongodb').MongoClient;
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect( async err => {
    const collection = client.db("ZKDB").collection("MovieSearch");
    const cursor = await collection.findOne({'id': req.params.movieID});
    
    if (cursor === null) {
      data = {"asdf": "error"}
    } else {
      data = cursor
    }
    console.log("Return Data: ", data)
    return res
  })
  
  client.close()
  // .then(response => response.json())
  // .then(data => res.send({ data }))
})


  //     let data;
//   await mongoose.connect(url, function(err, db) {
//     assert.strictEqual(null, err);
//     data = db.collection('MovieSearch').findOne({'id': req.params.movieID})
//   })
//   .then(db.close)
//   return data
// })

  // var resultArray = [];
  // mongo.connect(url, function(err, db) {
  //   assert.strictEqual(null, err);
  //     var cursor = db.collection('MovieSearch').find('{}');
  //     cursor.foreach(function(doc, err) {
  //       assert.strictEqual(null, err);
  //       resultArray.push(doc);
  //     }, 
  //     function () {
  //     db.close();
  //     res.send({ resultArray })
  //     })
  //   })
  // })
  
  // // INSERT data (insertOne)
  // router.post('/insert', function(req, res, next) {
  //   var item = {
  //     title: req.body.title,
  //     id: req.body.id,
  //     thumbsUp: req.body.up,
  //     thumbsDown: req.body.down
  //   }
  //   console.log(item)
  //   mongo.connect(url, function(err, db) {
  //     assert.strictEqual(null, err);
  //     db.collection('MovieSearch').insertOne(item, function(err, result) {
  //       assert.strictEqual(null, err);
  //       console.log(result);
  //       db.close();
  //     })
  //   })
  // });
  module.exports = router;