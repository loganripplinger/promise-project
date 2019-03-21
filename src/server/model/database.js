class Database {
  constructor() {
    this.users = []
    this.events = []
  }

  addUser(user) {
    this.users.push(user)
  }

  // removeUser(intID) {}

  addEvent(event) {
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

  getNewID() {
    // This is super dumb, dont do this.
    // O(n) when it should be O(1)
    let largestInt = 0
    this.events.forEach(event => {
      if (event.getID() > largestInt) {
        largestInt = event.getID()
      }
    })
    return largestInt + 1
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