const { Model } = require('objection');

const tableNames = require('../../constants/tableNames');

class Country extends Model {
  static get tableName() {
    return tableNames.country;
  }
}

module.exports = Country;
