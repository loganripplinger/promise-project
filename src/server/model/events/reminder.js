const BaseEvent = require('./baseEvent')
const validator = require('../util/validator')
const Database = require('../database');

class Reminder extends BaseEvent {
  constructor(id, datetime, referenceEvent, reminderMessage) {
    super(id, datetime)
    this.type = 'reminder'
    this.referenceEvent = referenceEvent
    this.reminderMessage = reminderMessage
  }

  getReferenceEvent() {
    return this.referenceEvent
  }

  getReminderMessage() {
    return this.reminderMessage
  }

  static validate(object) { 
    const keys = ['datetime', 'referenceEvent', 'reminderMessage']
    return validator.validate(object, keys)
  }

  static createNewFromJSON(object) {
    db = Database.getDb()
    const id = db.getNewID()
    const datetime = object.datetime
    const referenceEvent = object.referenceEvent
    const reminderMessage = object.reminderMessage
    return new Reminder(id, datetime, referenceEvent, reminderMessage)
  }
}

module.exports = Reminder