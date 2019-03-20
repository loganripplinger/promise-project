const AttendableBaseEvent = require('./attendableBaseEvent')
const validator = require('../util/validator')
const Database = require('../database');

class CourtDate extends AttendableBaseEvent {
  constructor(id, datetime, keptAppointment, location) {
    super(id, datetime, keptAppointment)
    this.type = 'court-date'
    this.location = location
  }

  getLocation() {
    return this.location
  }

  static validate(object) { 
    const keys = ['datetime', 'keptAppointment', 'location']
    return validator.validate(object, keys)
  }

  static createNewFromJSON(object) {
    db = Database.getDb()
    const id = db.getNewID()
    const datetime = object.datetime
    const keptAppointment = object.keptAppointment
    const location = object.location
    return new CourtDate(id, datetime, keptAppointment, location)
  }
}

module.exports = CourtDate