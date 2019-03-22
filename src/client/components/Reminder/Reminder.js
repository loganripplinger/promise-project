import React from 'react';
import Event from '../Event/Event'
import { Container } from '../../styles'
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons'

export default class Reminder extends React.Component {    
  render() {
    const headerText = "Reminder for Court Date"
    const bodyText = this.props.event.reminderMessage

    return (
      <div>
        <Event
          datetime={this.props.datetime}
          icon={faCommentAlt}
          header={headerText}
          body={bodyText}
          now={this.props.now}
        />
      </div>
    )
  }
}