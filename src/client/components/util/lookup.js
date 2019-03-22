import CourtDate from "../CourtDate/CourtDate";
import Reminder from "../Reminder/Reminder";
import CaseManangerAppointment from "../CaseManagerAppointment/CaseManagerAppointment";
import DataUpdated from "../DataUpdated/DataUpdated";
import {
  faCalendar,
  faCalendarCheck,
  faCalendarTimes
} from "@fortawesome/free-regular-svg-icons";

export const eventComponentLookup = {
  'court-date': CourtDate,
  'reminder': Reminder,
  'case-manager-appointment': CaseManangerAppointment,
  'client-data-updated': DataUpdated
};

export const iconLookup = {
  true: {
    icon: faCalendarCheck,
    color: "green"
  },
  false: {
    icon: faCalendarTimes,
    color: "red"
  },
  undefined: {
    icon: faCalendar,
    color: "blue"
  }
};
