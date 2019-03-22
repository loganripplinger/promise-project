class Database {
  constructor() {
    this.users = []
    this.events = []
    this.IDs = 0
  }

  addUser(user) {
    this.users.push(user)
  }

  removeUser(intID) {}

  addEvent(event) {
    event.setID(++this.IDs)

    this.events.push(event)
    console.log('\n')
    console.log('\n')
    console.log('Added event:\n', event, '\n')
    console.log('Current Events:\n')
    console.log(this.events)
  }

  removeEvent(intID) {
    // time/space O(n). Bad but this is not a feature for the demo
    this.events = this.events.filter(event => event.getID() !== intID)
  }

  getAllEvents(userID) {
    return this.events
  }
}

// Singleton pattern
let db;

module.exports = {
  getDb: () => {
    if (db) {
      return db
    } else {
      db = new Database()
      return db
    }
  }
}