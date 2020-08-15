const { Model } = require('objection');

const tableNames = require('../../constants/tableNames');

class State extends Model {
  static get tableName() {
    return tableNames.state;
  }
}

module.exports = State;
