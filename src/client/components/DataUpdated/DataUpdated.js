import React from "react";
import Event from "../Event/Event";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

const DataUpdated = ({datetime, now, nowIsInFuture}) => {
  const headerText = "Client Data Updated";

  return (
      <Event
        datetime={datetime}
        icon={faEdit}
        header={headerText}
        now={now}
        nowIsInFuture={nowIsInFuture}
      />
  );
}

export default DataUpdated;