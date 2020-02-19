
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://yanuyanu:abcd@cluster0-06noh.mongodb.net/training?retryWrites=true&w=majority";


  async function insertMany(json){
    await MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("training");
        dbo.collection("pangram").insertMany(json, function(err, res) {
          if (err) throw err;
          db.close();
        });
      });
  }

  module.exports=insertMany;