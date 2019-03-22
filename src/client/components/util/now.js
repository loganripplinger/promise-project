const insertNow = events => {
  let prev = Infinity;
  let now = Date.now();

  events.forEach(event => {
    event.now = false;

    if (now > event.datetime && prev.datetime > now) {
      prev.now = true;
    }
    prev = event;
  });

  // Handle edge case when now is after all events
  const nowIsInFuture = events.every(event => event.now === false);
  if (nowIsInFuture) events[0].nowIsInFuture = true;
};

export default insertNow;
