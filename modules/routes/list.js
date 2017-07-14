var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var pg = require('pg');


var config = {
  database: 'italk',
  host: 'localhost',
  port: 5432, // default port for postico
  max: 20
};

var pool = new pg.Pool(config);

//gets all phrases from the database
router.get('/getPhrases', function (req, res) {
  pool.connect(function (err, client, done) {
    if (err) {
      console.log('Error connecting to the DB', err);
      res.sendStatus(500);
      done();
      return;
    }

    client.query('SELECT * FROM phrases ORDER BY id DESC;', function (err, result) {
      done();
      if (err) {
        console.log('Error querying the DB', err);
        res.sendStatus(500);
        return;
      }

      console.log('Got rows from the DB:', result.rows);
      res.send(result.rows);
    });
  });
});


router.post('/addPhrases', function (req, res) {
  pool.connect(function (err, client, done) {
    if (err) {
      console.log('Error connecting to the DB', err);
      res.sendStatus(500);
      done();
      return;
    }

    client.query("INSERT INTO phrases (language_id, phrase) VALUES ($1, $2)", [req.body.language_id, req.body.phrase], function (err, result) {
      done();
      if (err) {
        console.log('Error querying the DB', err);
        res.sendStatus(500);
        return;
      }

      console.log('Got rows from the DB:', result.rows);
      res.send(result.rows);
    });
  });
});
//
// router.delete('/deleteJoke', function (req, res) {
//   pool.connect(function (err, client, done) {
//     if (err) {
//       console.log('Error connecting to the DB', err);
//       res.sendStatus(500);
//       done();
//       return;
//     }
//
//     client.query('DELETE FROM funny_jokes WHERE id = ' + req.body.jokeId + ';', function (err, result) {
//       done();
//       if (err) {
//         console.log('Error querying the DB', err);
//         res.sendStatus(500);
//         return;
//       }
//
//       console.log('Got rows from the DB:', result.rows);
//       res.send(result.rows);
//     });
//   });
// });
//
//
module.exports = router;
