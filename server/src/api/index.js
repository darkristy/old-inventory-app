const express = require('express');

const project = require('../constants/project');

const states = require('./states/states.routes');
const countries = require('./countries/countries.routes');
const addresses = require('./addresses/addresses.routes');
const companies = require('./companies/companies.routes');
const items = require('./items/items.routes');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: project.message,
  });
});

router.use('/states', states);
router.use('/countries', countries);
router.use('/addresses', addresses);
router.use('/companies', companies);
router.use('/items', items);

module.exports = router;
