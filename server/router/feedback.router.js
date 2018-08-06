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

router.delete('/:id', (req, res) => {
  console.log('got to DELETE');
  pool.query(`DELETE FROM "feedback" WHERE "id" = $1;`, [req.params.id])
    .then((results) => {
      res.sendStatus(200);
    })
    .catch((errorFromPG) => {
      console.log(errorFromPG)
      res.sendStatus(500);
    })
})

router.put('/', (req, res) => {
  console.log(req.body)
  pool.query(`UPDATE "feedback" set "flagged" = $1,`, [req.body.flagged])
  .then((results) => {
    console.log('PUT results', results);
    res.send(results.rows);
  })
  .catch((errorFromPG) => {
    console.log(errorFromPG)
    res.sendStatus(500);
  })
})

module.exports = router;