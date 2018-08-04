const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

router.get('/', (req, res) => {
    console.log('got to GET feedback')
    pool.query(`SELECT * FROM "feedback";`).then( (results) => {
      res.send(results.rows)
    }).catch( (error) => {
      console.log("error!", error );
      res.sendStatus(500);
    }) 
  });

module.exports = router;