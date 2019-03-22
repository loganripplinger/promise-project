import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import AddEventModal from "./components/Modal/AddEventModal";
import "./app.css";
import { AppWrapper } from "./styles";
import ReactImage from "./react.png";
import EventFactory from "./components/EventFactory/EventFactory.js";
import insertNowBarIntoEvents from "./components/util/now";

export default class App extends Component {
  state = {
    events: null,
    modalIsOpen: false
  };

  componentDidMount() {
    this.getAllEvents();
  }

  getAllEvents = () => {
    fetch("/api/events")
      .then(res => res.json())
      .then(eventsData => {
        const sortByDateDesc = (a, b) => b.datetime - a.datetime;
        eventsData.sort(sortByDateDesc);

        insertNowBarIntoEvents(eventsData);

        this.setState({ events: eventsData });
      });
  };

  toggleModal = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  };

  render() {
    const { events } = this.state;

    // Needs to be refactored into a class method
    const showEventsOrLoadingMessage = () => {
      if (this.state.events) {
        return events.map(event => (
          <EventFactory key={event.id} event={event} />
        ));
      } else {
        return <h1>Loading.. please wait!</h1>;
      }
    };

    return (
      <AppWrapper>
        {showEventsOrLoadingMessage()}
        <Button onClick={this.toggleModal}>Add Event</Button>
        <AddEventModal
          show={this.state.modalIsOpen}
          toggleModal={this.toggleModal}
          refreshPage={this.getAllEvents}
        />
      </AppWrapper>
    );
  }
}
