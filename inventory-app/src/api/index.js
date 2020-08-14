const express = require('express');

const { message } = require('../constants/project');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message,
  });
});

module.exports = router;
