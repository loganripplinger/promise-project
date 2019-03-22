import React from 'react';
import NowLine from '../NowLine/NowLine'
import { ContainerWrapper, Container, Header, Time, Icon, Content, Message } from '../../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import timeFormatter from '../util/timeFormatter'

export default class Event extends React.Component {
  render() {
    const datetime = timeFormatter(this.props.datetime)
    const icon = this.props.icon
    const iconColor = this.props.iconColor || "black"
    const header = this.props.header
    const body = this.props.body || null
    const now = this.props.now
    const nowIsInFuture = this.props.nowIsInFuture
    console.log(nowIsInFuture)
    
    return (
      <ContainerWrapper>
        { nowIsInFuture ? <NowLine now={true} /> : null }
        <Container>
          <Time>{datetime}</Time>
          <Icon><FontAwesomeIcon icon={icon} color={iconColor} /></Icon>
          <Content>
            <Header>{header}</Header>
            { 
             body ? <Message>{body}</Message>
                  : null 
            }
          </Content>
        </Container>
        <NowLine now={now} />
      </ContainerWrapper>
    )
  }
}