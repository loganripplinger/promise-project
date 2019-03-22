const express = require("express");
const router = express.Router();
const Database = require("../model/database");
const DataUpdated = require("../model/events/dataUpdated");

db = Database.getDb();

router.put("/", function(req, res, next) {
  // Assert json has all required and valid parts
  dataUpdatedJSON = req.body;

  if (!DataUpdated.validate(dataUpdatedJSON)) {
    res.status(400).json({ error: "Missing a required field" });
    return;
  }

  // Sanitize
  // dataUpdated.sanitize()
  console.warn(
    "Unsanitized is being put into the database. Do not use in production until sanitization is implemented."
  );

  // create and Insert into db
  dataUpdated = DataUpdated.createNewFromJSON(dataUpdatedJSON);
  db.addEvent(dataUpdated);

  // return object to client with all data
  dataUpdatedJSON.id = dataUpdated.getID();
  dataUpdatedJSON.type = dataUpdated.getType();
  res.status(200).json(dataUpdatedJSON);
});

module.exports = router;
