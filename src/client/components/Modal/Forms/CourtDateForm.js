import React from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ButtonWrapper } from "../style"

/* 
API:
/api/court-date
{
  "datetime": int,
  "keptAppointment": true/false/undefined str,
  "location": str
}
*/

// Refactor into form factory
export default class CourtDateForm extends React.Component {
  state = { datetime: "", keptAppointment: undefined };

  dateChange = e => {
    this.setState({ datetime: e.target.value });
  };

  keptAppointmentChange = e => {
    this.setState({ keptAppointment: e.target.id });
  };

  submit = () => {
    const req = {
      datetime: new Date(this.state.datetime).getTime(),
      keptAppointment: this.state.keptAppointment,
      location: "mocked location"
    };

    axios
      .put("/api/court-date", req)
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
          <Form.Label>Kept Appointment</Form.Label>
          <div>
            <Form.Check
              name="keptAppointment"
              id="true"
              inline
              label="Kept"
              type="radio"
              onChange={this.keptAppointmentChange}
              value={this.state.keptAppointment}
            />
            <Form.Check
              name="keptAppointment"
              id="false"
              inline
              label="Missed"
              type="radio"
              onChange={this.keptAppointmentChange}
              value={this.state.keptAppointment}
            />
            <Form.Check
              name="keptAppointment"
              id="undefined"
              inline
              label="In Future"
              type="radio"
              onChange={this.keptAppointmentChange}
              value={this.state.keptAppointment}
            />
          </div>
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
