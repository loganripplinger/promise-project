import moment from 'moment'

export const timeFormatter = (unixTime) => {
  return moment(unixTime).format('MM/DD/YYYY hh:mm A');
}

export default timeFormatter