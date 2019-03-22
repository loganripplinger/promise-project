import React from 'react';
import { Backdrop, Modal } from './style'
import { Button, Tabs, Tab } from 'react-bootstrap';
import CourtDateForm from './Forms/CourtDateForm'
import CaseManagerAppointmentForm from './Forms/CaseManagerAppointmentForm'
import ReminderForm from './Forms/ReminderForm'
import ClientDataUpdated from './Forms/ClientDataUpdatedForm'

export default class AddEventModal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    if (!this.props.show) {
      return null;
    }

    return (
      <Backdrop>
        <Modal>
          <div>Add Event</div>
          <hr/>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="court-date" title="Court Date">
              <CourtDateForm
                toggleModal={this.props.toggleModal}
                refreshPage={this.props.refreshPage}
              />
            </Tab>
            <Tab eventKey="case-manager-appointment" title="Case Manager Appointment">
              <CaseManagerAppointmentForm
                toggleModal={this.props.toggleModal}
                refreshPage={this.props.refreshPage}
              />
            </Tab>
            <Tab eventKey="reminder" title="Reminder">
              <ReminderForm
                toggleModal={this.props.toggleModal}
                refreshPage={this.props.refreshPage}
              />
            </Tab>
            <Tab eventKey="client-data-updated" title="Client Data Updated">
              <ClientDataUpdated
                toggleModal={this.props.toggleModal}
                refreshPage={this.props.refreshPage}
              />
            </Tab>
          </Tabs>
          <hr/>
          <Button onClick={this.props.toggleModal}>Close</Button> 
        </Modal>
      </Backdrop>
    )
  }
}

