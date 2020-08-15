const express = require('express');

const Company = require('./companies.model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  await Company.query()
    .where('deleted_at', null)
    .then(result => res.json(result))
    .catch(error => next(error));
});

module.exports = router;
