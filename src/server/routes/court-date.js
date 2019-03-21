const express = require('express')
const router = express.Router()
const Database = require('../model/database');
const CourtDate = require('../model/events/courtDate')

db = Database.getDb();

router.put('/', function (req, res, next) {
  // Assert json has all required and valid parts
  newCourtDateJSON = req.body

  if (!CourtDate.validate(newCourtDateJSON)) {
    res.status(400).json({'error': 'Missing a required field'})
    return
  }

  // Sanitize
  // newCourtDate.sanitize()
  console.warn('Unsanitized is being put into the database. Do not use in production until sanitization is implemented.')

  // create and Insert into db
  newCourtDate = CourtDate.createNewFromJSON(newCourtDateJSON)
  db.addEvent(newCourtDate)

  // return object to client with all data
  newCourtDateJSON.id = newCourtDate.getID()
  newCourtDateJSON.type = newCourtDate.getType()
  res.status(200).json(newCourtDateJSON)
})

module.exports = router