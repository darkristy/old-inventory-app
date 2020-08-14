const Knex = require('knex');

const tableNames = require('../../src/constants/tableNames');
const {
  createNameTable,
  addDefaultColumns,
  references,
} = require('../../src/lib/tableUtils');

/**
 * @param {Knex} knex
 */

exports.up = async knex => {
  await Promise.all([
    createNameTable(knex, tableNames.item_type),
    createNameTable(knex, tableNames.country),
    createNameTable(knex, tableNames.state),
  ]);

  await knex.schema.createTable(tableNames.address, table => {
    table.increments().notNullable();
    table.string('street_address_1', 50).notNullable();
    table.string('street_address_2', 50);
    table.string('city', 50).notNullable();
    table.string('zipcode', 15).notNullable();
    table.double('latitude').notNullable();
    table.double('longitude').notNullable();
    references(table, 'state', false);
    references(table, 'country');
    addDefaultColumns(table);
    table.unique([
      'street_address_1',
      'street_address_2',
      'city',
      'zipcode',
      'country_id',
      'state_id',
    ]);
  });
};

exports.down = async knex => {
  await Promise.all(
    [
      tableNames.company,
      tableNames.address,
      tableNames.item_type,
      tableNames.country,
      tableNames.state,
    ].map(tableName => knex.schema.dropTableIfExists(tableName))
  );
};
