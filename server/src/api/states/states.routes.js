const express = require('express');

const State = require('./states.model');

const router = express.Router();

const fields = ['id', 'name', 'code'];

router.get('/', async (req, res) => {
  await State.query()
    .select(fields)
    .where('deleted_at', null)
    .then(result => res.json(result));
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  // TODO: should we validate the ID?
  const getState = async () => {
    const state = await State.query()
      .findById(parseInt(id, 10) || 0)
      .select(fields)
      .where('deleted_at', null);

    if (state) {
      return res.json(state);
    }

    return next();
  };

  getState().catch(error => next(error));
});

module.exports = router;
