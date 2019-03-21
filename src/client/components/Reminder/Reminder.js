import React from 'react';
import { Container, Header, Time, Icon, Content, Message } from '../../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons'

export default class Reminder extends React.Component {
  // this.props.event.type
    
  render() {
    const datetime = this.props.event.datetime

    return (
      <Container>
        <Time>{datetime}</Time>
        <Icon><FontAwesomeIcon icon={faCommentAlt} /></Icon>
        <Content>
          <Header>Reminder for Court Date</Header>
          <Message>{this.props.event.reminderMessage}</Message>
        </Content>
      </Container>
    )
  }
}