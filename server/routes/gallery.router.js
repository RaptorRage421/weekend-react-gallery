const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
});

// GET /gallery
router.get('/', (req, res) => {
  // code here
const queryText = `
SELECT * FROM "gallery"
    ORDER BY "likes" DESC;
`

  pool.query(queryText)
  .then((results) => {
    res.send(results.rows)
  })
  .catch((err) => {
    console.error('Error in GET /api/gallery', err)
    res.sendStatus(500)
  })

});


router.post('/', (req,res) => {
const queryText = `
INSERT INTO "gallery"
("url", "title", "description" )
VALUES ($1,$2,$3)
`
let upload = req.body
pool.query(queryText, [upload.url, upload.title, upload.description])
.then(results => {
  res.sendStatus(201)
})
.catch(err => {
  console.error("error in POST adding new gallery item", err)
})
})


router.delete('/:id', (req, res) => {
  const queryText = `
  DELETE FROM "gallery"
  WHERE "id" = $1
  `
  pool.query(queryText, [req.params.id])
  .then((results) => {
    res.sendStatus(200)
  })
  .catch((err) => {
    console.error("Issue with the DELETE", err)
  })
})

router.put('/:id', (req,res) => {
  console.log("req.params", req.params)
  const queryText = `
  UPDATE "gallery"
  SET "likes" = "likes" + 1
  WHERE "id" = $1;
  `
  pool.query(queryText, [req.params.id])
  .then((results) => {
    res.sendStatus(200)
  })
  .catch((err) => {
    console.error('Error in PUT /api/gallery/:id',err)
    res.sendStatus(500)
  })
})


module.exports = router;
