const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

router.get('/', (req, res) => {
  pool.query(`SELECT * FROM "feedback";`)
    .then((results) => {
      res.send(results.rows)
    })
    .catch((error) => {
      console.log("error!", error);
      res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
  const feedback = req.body;
  pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                VALUES ($1, $2, $3, $4);`,
    [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
    .then((results) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('error with SQL INSERT', error);
      res.sendStatus(500);
    });
});

module.exports = router;