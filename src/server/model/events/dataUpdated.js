const BaseEvent = require("./baseEvent");
const validator = require("../util/validator");

class DataUpdated extends BaseEvent {
  constructor(datetime) {
    super(datetime);
    this.type = "client-data-updated";
  }

  static validate(object) {
    const keys = ["datetime"];
    return validator.validate(object, keys);
  }

  static createNewFromJSON(object) {
    const datetime = object.datetime;
    return new DataUpdated(datetime);
  }
}

module.exports = DataUpdated;
