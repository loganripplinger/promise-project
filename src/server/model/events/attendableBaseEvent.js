const BaseEvent = require("./baseEvent");
const validator = require("../util/validator");

// Abstract base class
class AttendableBaseEvent extends BaseEvent {
  constructor(datetime, keptAppointment) {
    super(datetime);
    this.keptAppointment = keptAppointment;
  }

  getKeptAppointment() {
    return this.keptAppointment;
  }
}

module.exports = AttendableBaseEvent;
