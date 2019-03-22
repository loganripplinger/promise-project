const BaseEvent = require('./baseEvent')
const validator = require('../util/validator')

class Reminder extends BaseEvent {
  constructor(datetime, referenceEvent, reminderMessage) {
    super(datetime)
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
    const datetime = object.datetime
    const referenceEvent = object.referenceEvent
    const reminderMessage = object.reminderMessage
    return new Reminder(datetime, referenceEvent, reminderMessage)
  }
}

module.exports = Reminder