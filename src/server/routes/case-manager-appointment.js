const express = require("express");
const router = express.Router();
const Database = require("../model/database");
const CaseManagerAppointment = require("../model/events/caseManagerAppointment");

db = Database.getDb();

router.put("/", function(req, res, next) {
  // Assert json has all required and valid parts
  newCaseManagerAppointmentJSON = req.body;

  if (!CaseManagerAppointment.validate(newCaseManagerAppointmentJSON)) {
    res.status(400).json({ error: "Missing a required field" });
    return;
  }

  // Sanitize
  // newCaseManagerAppointment.sanitize()
  console.warn(
    "Data is not being sanitized. Do not use in production until implemented."
  );

  // create and Insert into db
  newCaseManagerAppointment = CaseManagerAppointment.createNewFromJSON(
    newCaseManagerAppointmentJSON
  );
  db.addEvent(newCaseManagerAppointment);

  // return object to client with all data
  newCaseManagerAppointmentJSON.id = newCaseManagerAppointment.getID();
  newCaseManagerAppointmentJSON.type = newCaseManagerAppointment.getType();
  res.status(200).json(newCaseManagerAppointmentJSON);
});

module.exports = router;
