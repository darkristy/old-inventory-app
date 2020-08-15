const express = require('express');

const Address = require('./addresses.model');

const router = express.Router();

const addressFields = [
  'street_address_1',
  'street_address_2',
  'city',
  'zipcode',
];

router.get('/', async (req, res, next) => {
  await Address.query()
    .where('deleted_at', null)
    .then(result => res.json(result))
    .catch(error => next(error));
});

router.post('/', async (req, res, next) => {
  addressFields.forEach(prop => {
    if (req.body[prop]) {
      req.body[prop] = req.body[prop]
        .toString()
        .toLowerCase()
        .trim();
    }
  });

  await Address.query()
    .insert(req.body)
    .then(result => res.json(result))
    .catch(error => next(error));
});

module.exports = router;
