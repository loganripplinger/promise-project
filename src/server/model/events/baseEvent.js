// Abstract base class
class BaseEvent {
  constructor(datetime) {
    this.type = 'base-event'
    this.datetime = datetime
  }

  getDatetime() {
    return this.datetime
  } 

  setID(id) {
    this.id = id
  }

  getID() {
    return this.id
  }

  getType() {
    return this.type
  }
}

module.exports = BaseEvent