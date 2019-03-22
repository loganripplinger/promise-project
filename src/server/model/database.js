class Database {
  constructor() {
    this.users = [];
    this.events = [];
    this.IDs = 0;
  }

  addUser(user) {
    this.users.push(user);
  }

  // removeUser(intID) {}

  addEvent(event) {
    event.setID(++this.IDs);
    this.events.push(event);
  }

  removeEvent(intID) {
    this.events = this.events.filter(event => event.getID() !== intID);
  }

  getAllEvents(userID) {
    return this.events;
  }
}

// Singleton pattern
let db;

module.exports = {
  getDb: () => {
    if (db) {
      return db;
    } else {
      db = new Database();
      return db;
    }
  }
};
