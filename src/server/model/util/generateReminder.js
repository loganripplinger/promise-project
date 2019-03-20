const Reminder = require('../events/reminder')
const formatter = require('./timeFormatter')

module.exports = {
  oneDayBeforeCourt: (id, person, objCourtDate) => {
    const oneDay = 5
    const datetime = objCourtDate.getDatetime() - oneDay
    
    timeLocationMessage = `Hello ${person.name}, reminder that you have court tomorrow at ${formatter.time(datetime)} at ${objCourtDate.getLocation()}.`
    assistanceMessage = `If you need assistance with transportation, please contact your case manager at ${person.caseManager.number}.`
    message = `${timeLocationMessage} ${assistanceMessage}`
    
    reminder = new Reminder(id, datetime, objCourtDate, message)
    return reminder
  },

  courtDateConfirmation: (id, datetime, person, objCourtDate) => {
    confirmationMessage = `Hello ${person.name}, this is to confirm that Court Date has been added to your schedule for ${formatter.fancyTime(objCourtDate.getDatetime())}. Take care.`
    reminder = new Reminder(id, datetime, objCourtDate, confirmationMessage)
    return reminder
  }
}
