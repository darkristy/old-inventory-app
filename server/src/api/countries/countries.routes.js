const express = require('express');

const Country = require('./countries.model');

const router = express.Router();

const fields = ['id', 'name', 'code'];

router.get('/', async (req, res, next) => {
  await Country.query()
    .where('deleted_at', null)
    .select(fields)
    .then(result => res.json(result));
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  // TODO: should we validate the ID?
  const getCountry = async () => {
    const country = await Country.query()
      .findById(parseInt(id, 10) || 0)
      .select(fields)
      .where('deleted_at', null);

    if (country) {
      return res.json(country);
    }

    return next();
  };

  getCountry().catch(error => next(error));
});

module.exports = router;
