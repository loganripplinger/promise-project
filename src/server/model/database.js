class Database {
  constructor() {
    this.users = []
    this.events = []
    this.IDs = 0
  }

  addUser(user) {
    this.users.push(user)
  }

  // removeUser(intID) {}

  addEvent(event) {
    this.IDs += 1
    event.setID(this.IDs)

    this.events.push(event)
    console.log('\n')
    console.log('\n')
    console.log('Added event:\n', event, '\n')
    console.log('Current Events:\n')
    console.log(this.events)
  }

  removeEvent(intID) {
    // time/space O(n). Bad, but this is a demo
    this.events = this.events.filter(event => event.getID() !== intID)
  }

  getAllEvents(userID) {
    return this.events
  }
}

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