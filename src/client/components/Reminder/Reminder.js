import React from "react";
import Event from "../Event/Event";
import { faCommentAlt } from "@fortawesome/free-regular-svg-icons";

const Reminder = ({event, datetime, now, nowIsInFuture}) => {
  const headerText = "Reminder for Court Date";
  const bodyText = event.reminderMessage;

  return (
      <Event
        datetime={datetime}
        icon={faCommentAlt}
        header={headerText}
        body={bodyText}
        now={now}
        nowIsInFuture={nowIsInFuture}
      />
  );
}

export default Reminder;