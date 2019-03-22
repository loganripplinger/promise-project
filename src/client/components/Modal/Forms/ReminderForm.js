import React from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ButtonWrapper } from "../style"

/* 
API:
/api/reminder
{
  "datetime": int,
  "referenceEvent": str,
  "reminderMessage": str,
}
*/

// Refactor into form factory
export default class ReminderForm extends React.Component {
  state = { datetime: "", referenceEvent: "", reminderMessage: "" };

  dateChange = e => {
    this.setState({ datetime: e.target.value });
  };

  textChange = e => {
    this.setState({ reminderMessage: e.target.value });
  };

  submit = () => {
    const req = {
      datetime: new Date(this.state.datetime).getTime(),
      referenceEvent: "fakeobject",
      reminderMessage: this.state.reminderMessage
    };

    axios
      .put("/api/reminder", req)
      .then(response => {
        console.log(response);
        //Perform action based on response
        this.props.refreshPage();
        this.props.toggleModal();
      })
      .catch(error => {
        console.log(error);
        //Perform action based on error
      });
  };

  render() {
    return (
      <Form>
        <Form.Group controlId="datetime">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="datetime-local"
            onChange={this.dateChange}
            value={this.state.datetime}
          />
        </Form.Group>

        <Form.Group controlId="keptAppointment">
          <Form.Label>Message</Form.Label>
          <Form.Control
            type="text"
            onChange={this.textChange}
            value={this.state.text}
          />
        </Form.Group>

        <ButtonWrapper>
          <Button variant="primary" onClick={this.submit}>
            Submit
          </Button>
        </ButtonWrapper>
      </Form>
    );
  }
}
