import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

/* 
API:
/api/client-data-updated
{
  "datetime": 123
}
*/
export default class ClientDataUpdated extends React.Component {

  state = { datetime: "", keptAppointment: undefined }

  dateChange = (e) => {
    this.setState({datetime: e.target.value})
  }

  submit = () => {
    const req = {
      datetime: new Date(this.state.datetime).getTime()
    }

    axios.put('/api/client-data-updated', req)
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
          
        <Button variant="primary" onClick={this.submit}>
          Submit
        </Button>
      </Form>
    )
  }
}