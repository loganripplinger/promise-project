import React from 'react';
import Event from '../Event/Event'
import { Container } from '../../styles'
import { faEdit } from '@fortawesome/free-regular-svg-icons'

export default class DataUpdated extends React.Component {
  render() {
    const headerText = 'Client Data Updated'

    return (
      <div>
        <Event
          datetime={this.props.datetime}
          icon={faEdit}
          header={headerText}
          now={this.props.now}
        />
      </div>
    )
  }
}