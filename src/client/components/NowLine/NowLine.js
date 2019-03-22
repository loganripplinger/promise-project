import React from "react";
import { Line, NowLine, NowBlock } from "./style";

const NowLineComponent = ({now}) => {
  const EventFooterLine = now ? NowLine : Line;

  return (
    <EventFooterLine>
      {
        now 
          ? <NowBlock>NOW</NowBlock>
          : null
      }
    </EventFooterLine>
  );
}

export default NowLineComponent;