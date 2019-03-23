import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

/* 
API:
/api/case-manager-appointment
{
  "datetime": 123,
  "keptAppointment": true
}
*/
export default class CaseManagerAppointmentForm extends React.Component {

  state = { datetime: "", keptAppointment: undefined }

  dateChange = (e) => {
    this.setState({datetime: e.target.value})
  }

  keptAppointmentChange = (e) => {
    this.setState({keptAppointment: e.target.id})
  }

  submit = () => {
    const req = {
      datetime: new Date(this.state.datetime).getTime(),
      keptAppointment: this.state.keptAppointment
    }

    axios.put('/api/case-manager-appointment', req)
      .then((response) => {
        console.log(response);
        //Perform action based on response
        this.props.refreshPage()
        this.props.toggleModal()
      })
      .catch((error) => {
        console.log(error);
        //Perform action based on error
      });
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="datetime">
          <Form.Label>Date</Form.Label>
          <Form.Control type="datetime-local" onChange={this.dateChange} value={this.state.datetime} />
        </Form.Group>
        
        <Form.Group controlId="keptAppointment">
          <Form.Label>Kept Appointment</Form.Label>
          <div>
            <Form.Check name="keptAppointment" id='true' inline label='Kept' type="radio" onChange={this.keptAppointmentChange} value={this.state.keptAppointment} />
            <Form.Check name="keptAppointment" id='false' inline label='Missed' type="radio" onChange={this.keptAppointmentChange} value={this.state.keptAppointment} />
            <Form.Check name="keptAppointment" id='undefined' inline label='In Future' type="radio" onChange={this.keptAppointmentChange} value={this.state.keptAppointment} />
          </div>
        </Form.Group>
  
        <Button variant="primary" onClick={this.submit}>
          Submit
        </Button>
      </Form>
    )
  }
}