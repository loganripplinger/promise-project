const AttendableBaseEvent = require("./attendableBaseEvent");
const validator = require("../util/validator");

class CourtDate extends AttendableBaseEvent {
  constructor(datetime, keptAppointment, location) {
    super(datetime, keptAppointment);
    this.type = "court-date";
    this.location = location;
  }

  getLocation() {
    return this.location;
  }

  static validate(object) {
    const keys = ["datetime", "keptAppointment", "location"];
    return validator.validate(object, keys);
  }

  static createNewFromJSON(object) {
    const datetime = object.datetime;
    const keptAppointment = object.keptAppointment;
    const location = object.location;
    return new CourtDate(datetime, keptAppointment, location);
  }
}

module.exports = CourtDate;
