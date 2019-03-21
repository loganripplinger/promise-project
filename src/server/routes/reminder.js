const express = require('express')
const router = express.Router()
const Reminder = require('../model/events/reminder')
const Database = require('../model/database');

db = Database.getDb();

router.put('/', function (req, res, next) {
  // Assert json has all required and valid parts
  reminderJSON = req.body

  if (!Reminder.validate(reminderJSON)) {
    res.status(400).json({'error': 'Missing a required field'})
    return
  }

  // Sanitize
  // reminder.sanitize()
  console.warn('Data is not being sanitized. Do not use in production until implemented.')

  // create and Insert into db
  reminder = Reminder.createNewFromJSON(reminderJSON)
  db.addEvent(reminder)

  // return object to client with all data
  reminderJSON.id = reminder.getID()
  reminderJSON.type = reminder.getType()
  res.status(200).json(reminderJSON)
})

module.exports = router