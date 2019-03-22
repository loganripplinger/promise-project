import React from 'react';
import { Container, Time } from '../../styles'
import { eventComponentLookup } from '../util/lookup'

export default class EventFactory extends React.Component {
  render() {
    const Component = eventComponentLookup[this.props.event.type];

    return (
      <div>
        <Component 
          event={this.props.event}
          datetime={this.props.event.datetime}
          now={this.props.event.now}
        />
      </div>
    )
  }
}