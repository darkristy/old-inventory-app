const express = require('express');

const Item = require('./items.model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  await Item.query()
    .where('deleted_at', null)
    .then(result => res.json(result))
    .catch(error => next(error));
});

router.post('/', async (req, res, next) => {
  await Item.query()
    .insert(req.body)
    .then(result => res.json(result))
    .catch(error => next(error));
});

module.exports = router;
