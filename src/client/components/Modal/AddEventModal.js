import React from "react";
import { Backdrop, Modal, HeaderWrapper } from "./style";
import { Button, Tabs, Tab } from "react-bootstrap";
import CourtDateForm from "./Forms/CourtDateForm";
import CaseManagerAppointmentForm from "./Forms/CaseManagerAppointmentForm";
import ReminderForm from "./Forms/ReminderForm";
import ClientDataUpdated from "./Forms/ClientDataUpdatedForm";

const AddEventModal = ({show, toggleModal, refreshPage}) => {
  if (!show) {
    return null;
  }

  return (
    <Backdrop>
      <Modal>
        <HeaderWrapper>
          <div>Add Event</div>
          <Button onClick={toggleModal}>Close</Button>
        </HeaderWrapper>
        <hr />
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="court-date" title="Court Date">
            <CourtDateForm
              toggleModal={toggleModal}
              refreshPage={refreshPage}
            />
          </Tab>
          <Tab
            eventKey="case-manager-appointment"
            title="Case Manager Appointment"
          >
            <CaseManagerAppointmentForm
              toggleModal={toggleModal}
              refreshPage={refreshPage}
            />
          </Tab>
          <Tab eventKey="reminder" title="Reminder">
            <ReminderForm
              toggleModal={toggleModal}
              refreshPage={refreshPage}
            />
          </Tab>
          <Tab eventKey="client-data-updated" title="Client Data Updated">
            <ClientDataUpdated
              toggleModal={toggleModal}
              refreshPage={refreshPage}
            />
          </Tab>
        </Tabs>
      </Modal>
    </Backdrop>
  );
}

export default AddEventModal;