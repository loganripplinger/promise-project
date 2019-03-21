import React, { Component } from 'react';
import { AppWrapper } from './styles';
import ReactImage from './react.png';
import Event from './components/Event/Event.js';

export default class App extends Component {
  state = { events: null };

  componentDidMount() {
    fetch('/api/events')
      .then(res => res.json())
      .then(data => {
        data.sort((a, b) => b.datetime - a.datetime)
        // TODO find now
        this.setState({ events: data })
      });
      // TODO on the minute rerender
  }

  render() {
    const { events } = this.state;
    
    return (
      <AppWrapper>
        {events ? events.map((event) => <Event key={event.id} event={event} />)
                : <h1>Loading.. please wait!</h1>}
      </AppWrapper>
    );
  }
}
