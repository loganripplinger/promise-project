import React, { Component } from 'react';
import './app.css'
import { AppWrapper } from './styles';
import ReactImage from './react.png';
import EventFactory from './components/EventFactory/EventFactory.js';
import insertNowBarIntoEvents from './components/util/now'

export default class App extends Component {
  state = { events: null };

  componentDidMount() {
    fetch('/api/events')
      .then(res => res.json())
      .then(eventsData => {
        const sortByDateDesc = (a, b) => b.datetime - a.datetime;
        eventsData.sort(sortByDateDesc);
        
        insertNowBarIntoEvents(eventsData);

        this.setState({ events: eventsData });
      });
      // TODO on the minute rerender
  }

  render() {
    const { events } = this.state;

    const showEventsOrLoadingMessage = () => {
      if (this.state.events) {
        return events.map((event) => <EventFactory key={event.id} event={event} />)
      } else {
        return (<h1>Loading.. please wait!</h1>)
      }
    }

    return (
      <AppWrapper>
        {showEventsOrLoadingMessage()}
      </AppWrapper>
    );
  }
}
