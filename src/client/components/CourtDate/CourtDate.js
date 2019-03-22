import React from "react";
import Event from "../Event/Event";
import { iconLookup } from "../util/lookup";

const CourtDate = ({event, datetime, now, nowIsInFuture}) => {
  const calendarIcon = iconLookup[event.keptAppointment];
  const headerText = "Court Date";

  return (
      <Event
        datetime={datetime}
        icon={calendarIcon.icon}
        iconColor={calendarIcon.color}
        header={headerText}
        now={now}
        nowIsInFuture={nowIsInFuture}
      />
  );
}

export default CourtDate;