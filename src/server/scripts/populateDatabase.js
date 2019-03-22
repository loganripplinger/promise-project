// Implementing a fast database.
// Assume there is only one user, otherwise we could nest data in a list
// Reminders and client data updated don't seem to be events that could be attended
// Right now events are read-only, update hasn't been implmeneted to save time. Outside scope of demo.
const CourtDate = require('../model/events/courtDate')
const CaseManagerAppointment = require('../model/events/caseManagerAppointment')
const Reminder = require('../model/events/reminder')
const DataUpdated = require('../model/events/dataUpdated')

const generateReminders = require('../model/util/generateReminder')

const populateDatabase = (database) => {
  const person = {
    name: 'John',
    caseManager: {
      name: 'Alex',
      number: '555-666-7777'
    }
  }

  database.addUser(person)

  const courtDate1 = new CourtDate(123, undefined, '101 Washington St. Oakland')
  const courtDateReminder = generateReminders.oneDayBeforeCourt(person, courtDate1)
  const caseManagerAppointment1 = new CaseManagerAppointment(100, false)
  const courtDateCreatedReminder = generateReminders.courtDateConfirmation(66, person, courtDate1)
  const courtDate2 = new CourtDate(50, true, '101 Washington St. Oakland')
  const clientDataUpdated = new DataUpdated(40)
  const caseManagerAppointment2 = new CaseManagerAppointment(30, true)

  database.addEvent(courtDate1)
  database.addEvent(courtDateReminder)
  database.addEvent(caseManagerAppointment1)
  database.addEvent(courtDateCreatedReminder)
  database.addEvent(courtDate2)
  database.addEvent(clientDataUpdated)
  database.addEvent(caseManagerAppointment2)

  console.log('Database populated')
}

module.exports = populateDatabase