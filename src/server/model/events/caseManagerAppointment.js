const AttendableBaseEvent = require('./attendableBaseEvent')
const validator = require('../util/validator')
const Database = require('../database');

class CaseManagerAppointment extends AttendableBaseEvent {
  constructor(id, datetime, keptAppointment) {
    super(id, datetime, keptAppointment)
    this.type = 'case-manager-appointment'
  }

  static validate(object) { 
    const keys = ['datetime', 'keptAppointment']
    return validator.validate(object, keys)
  }

  static createNewFromJSON(object) {
    db = Database.getDb()
    const id = db.getNewID()
    const datetime = object.datetime
    const keptAppointment = object.keptAppointment
    return new CaseManagerAppointment(id, datetime, keptAppointment)
  }
}

module.exports = CaseManagerAppointment