import React from 'react';
import { Container, Header, Time, Icon, Content, Message } from '../../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-regular-svg-icons'

export default class DataUpdated extends React.Component {
  // this.props.event.type
  render() {
    const datetime = this.props.event.datetime
    
    return (
      <Container>
        <Time>{datetime}</Time>
        <Icon><FontAwesomeIcon icon={faEdit} /></Icon>
        <Header>Client Data Updated</Header>
      </Container>
    )
  }
}