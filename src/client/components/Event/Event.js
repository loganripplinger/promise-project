import React from "react";
import NowLineComponent from "../NowLine/NowLine";
import {
  ContainerWrapper,
  Container,
  Header,
  Time,
  Icon,
  Content,
  Message
} from "../../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import timeFormatter from "../util/timeFormatter";

const Event = (props) => {
  let { datetime, icon, iconColor, header, body, now, nowIsInFuture } = props;

  datetime = timeFormatter(datetime);
  iconColor = iconColor || "black";

  return (
    <ContainerWrapper>
      {nowIsInFuture ? <NowLineComponent now={true} /> : null}
      <Container>
        <Time>{datetime}</Time>
        <Icon>
          <FontAwesomeIcon icon={icon} color={iconColor} />
        </Icon>
        <Content>
          <Header>{header}</Header>
          {body ? <Message>{body}</Message> : null}
        </Content>
      </Container>
      <NowLineComponent now={now} />
    </ContainerWrapper>
  );
}

export default Event;