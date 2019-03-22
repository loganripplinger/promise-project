import moment from "moment";

const timeFormatter = (unixTime) => {
  return moment(unixTime).format("MM/DD/YYYY hh:mm A");
};

export default timeFormatter;