const environment = process.env.NODE_ENV || 'development';
const Knex = require('knex')[environment];

const orderedTableNames = require('../../src/constants/orderedTableNames');
const tableNames = require('../../src/constants/tableNames');

/**
 * @param {Knex} knex
 */

exports.seed = async (knex) =>  {
    // Deletes ALL existing entries
  await orderedTableNames.reduce(async (promise, tableName) => {
    await promise;
    return knex(tableName).del();
  }, Promise.resolve());
  // Inserts seed entries
  await knex('table_name').insert([
    {id: 1, colName: 'rowValue1'},
    {id: 2, colName: 'rowValue2'},
    {id: 3, colName: 'rowValue3'}
  ]);
};
