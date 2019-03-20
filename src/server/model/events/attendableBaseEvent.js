const BaseEvent = require('./baseEvent')
const validator = require('../util/validator')

// Abstract base class
class AttendableBaseEvent extends BaseEvent {
  constructor(id, datetime, keptAppointment) {
    super(id, datetime)
    this.keptAppointment = keptAppointment
  }

  getKeptAppointment() {
    return this.keptAppointment
  }
}

module.exports = AttendableBaseEvent