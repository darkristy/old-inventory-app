const Knex = require('knex');

const { references } = require('../../src/lib/tableUtils');
const tableNames = require('../../src/constants/tableNames');

/**
 * @param {Knex} knex
 */
exports.up = async knex => {
  await knex.schema.table(tableNames.state, table => {
    table.string('code');
    references(table, tableNames.country);
  });

  await knex.schema.table(tableNames.country, table => {
    table.string('code');
  });
};

/**
 * @param {Knex} knex
 */
exports.down = async knex => {
  await knex.schema.table(tableNames.state, table => {
    table.dropColumn('code');
    table.dropColumn('country_id');
  });

  await knex.schema.table(tableNames.country, table => {
    table.dropColumn('code');
  });
};
