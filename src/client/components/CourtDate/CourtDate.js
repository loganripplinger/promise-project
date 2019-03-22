import React from 'react';
import { Container, Header, Time, Icon, Content } from '../../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarTimes } from '@fortawesome/free-regular-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons'
import timeFormatter from '../util/timeFormatter'

export default class CourtDate extends React.Component {
  // this.props.event.type
  render() {
    const iconLookup = {
      'true': {icon: faCalendarCheck, color: 'green'},
      'false': {icon: faCalendarTimes, color: 'red'},
      'undefined': {icon: faCalendar, color: 'grey'}
    }

    const calIcon = iconLookup[this.props.event.keptAppointment]

    const datetime = timeFormatter(this.props.event.datetime)

    return (
      <Container>
        <Time>{datetime}</Time>
        <Icon><FontAwesomeIcon icon={calIcon.icon} color={calIcon.color} /></Icon>
        <Content>
          <Header>Court Date</Header>
        </Content>
      </Container>
    )
  }
}