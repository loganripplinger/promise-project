import React from 'react';
import Event from '../Event/Event'
import { Container } from '../../styles'
import { iconLookup } from '../util/lookup'

export default class CaseManagerAppointment extends React.Component {
  render() {
    const calendarIcon = iconLookup[this.props.event.keptAppointment]
    const headerText = 'Case Manager Appointment'

    return (
      <div>
        <Event
          datetime={this.props.datetime}
          icon={calendarIcon.icon}
          iconColor={calendarIcon.color}
          header={headerText}
          now={this.props.now}
        />
      </div>
    )
  }
}