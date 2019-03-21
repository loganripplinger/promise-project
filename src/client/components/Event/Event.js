import React from 'react';
import { Container, Time } from '../../styles'
import CourtDate from '../CourtDate/CourtDate'
import Reminder from '../Reminder/Reminder'
import CaseManangerAppointment from '../CaseManagerAppointment/CaseManagerAppointment'
import DataUpdated from '../DataUpdated/DataUpdated'

export default class Event extends React.Component {
  render() {
    // Prop is an event object
    // Look up prop.type and return the proper event object
    const eventDict = {
      'court-date': CourtDate,
      'reminder': Reminder,
      'case-manager-appointment': CaseManangerAppointment,
      'client-data-updated': DataUpdated
    }

    const Component = eventDict[this.props.event.type];

    return (
      <Container>
        <Component event={this.props.event} />
      </Container>
    )
  }
}