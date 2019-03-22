import React from "react";
import Event from "../Event/Event";
import { iconLookup } from "../util/lookup";

const CaseManagerAppointment = ({event, datetime, now, nowIsInFuture}) => {
  const calendarIcon = iconLookup[event.keptAppointment];
  const headerText = "Case Manager Appointment";

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

export default CaseManagerAppointment;