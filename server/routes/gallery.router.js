const express = require('express');
const router = express.Router();

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
    let idToUpdate = req.params.id;
    let queryText = 'UPDATE gallery SET likes = likes + 1 WHERE id = $1;';

    const sqValues = [idToUpdate]
    pool.query(queryText, sqValues)
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((dbError) => {
            console.log("likes update failed", dbError);
            res.sendStatus(500);
        })
});

// GET /gallery
router.get('/', (req, res) => {
  // code here
  const sqlText = `SELECT * FROM gallery ORDER BY id;`;
  pool.query(sqlText)
      .then((result) => {
          console.log(`Got stuff back from the database`, result.rows);
          res.send(result.rows);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500); // Good server always responds
      })
});

module.exports = router;
