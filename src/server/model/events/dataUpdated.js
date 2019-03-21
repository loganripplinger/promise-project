const BaseEvent = require('./baseEvent')
const validator = require('../util/validator')
const Database = require('../database');

class DataUpdated extends BaseEvent {
  constructor(id, datetime) {
    super(id, datetime)
    this.type = 'client-data-updated'
  }

  static validate(object) { 
    const keys = ['datetime']
    return validator.validate(object, keys)
  }

  static createNewFromJSON(object) {
    db = Database.getDb()
    const id = db.getNewID()
    const datetime = object.datetime
    return new DataUpdated(id, datetime)
  }
}

module.exports = DataUpdated