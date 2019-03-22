const AttendableBaseEvent = require('./attendableBaseEvent')
const validator = require('../util/validator')
const Database = require('../database');

class CaseManagerAppointment extends AttendableBaseEvent {
  constructor(datetime, keptAppointment) {
    super(datetime, keptAppointment)
    this.type = 'case-manager-appointment'
  }

  static validate(object) { 
    const keys = ['datetime', 'keptAppointment']
    return validator.validate(object, keys)
  }

  static createNewFromJSON(object) {
    const datetime = object.datetime
    const keptAppointment = object.keptAppointment
    return new CaseManagerAppointment(datetime, keptAppointment)
  }
}

module.exports = CaseManagerAppointment