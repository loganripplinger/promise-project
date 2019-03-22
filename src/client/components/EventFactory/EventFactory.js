import React from "react";
import { eventComponentLookup } from "../util/lookup";

const EventFactory = (props) =>  {
  const Component = eventComponentLookup[props.event.type];

  return (
      <Component
        event={props.event}
        datetime={props.event.datetime}
        now={props.event.now}
        nowIsInFuture={props.event.nowIsInFuture}
      />
  );
}

export default EventFactory;