const insertNow = (events) => {
  // Iterate through list
  // Store previous
  // Find the location where now is after current and before prev
  // after means int greater than
  // before means int less than
  // Insert into prev

  // the now bar will take over the bottom part of the layout
  // Edge case when two events occur at the same time
  let prev = Infinity
  let now = Date.now()

  events.forEach((event) => {
    event.now = false
    console.log(`${prev.datetime}, ${event.datetime}, ${now}`)

    if (now > event.datetime && prev.datetime > now) {
      prev.now = true
    }
    prev = event
  })

  // Handle edge case when now is after all events
}

export default insertNow