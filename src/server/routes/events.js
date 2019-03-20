const express = require('express')
const router = express.Router()
const Database = require('../model/database');

db = Database.getDb();

router.get('/', function (req, res, next) {
  const allEvents = db.getAllEvents()
  res.json(allEvents)
  // res.send({ username: os.userInfo().username }))
})

router.delete('/{id}', function (req, res, next) {
  // Unimplemented
})

module.exports = router