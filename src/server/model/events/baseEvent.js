// Abstract base class
class BaseEvent {
  constructor(id, datetime) {
    this.id = id
    this.type = 'base-event'
    this.datetime = datetime
  }

  getDatetime() {
    return this.datetime
  } 

  getID() {
    return this.id
  }

  getType() {
    return this.type
  }
}

module.exports = BaseEvent