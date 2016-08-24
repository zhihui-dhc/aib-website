import moment from 'moment'

function read (date) {
  return moment(date, 'x').format('YYYY-MM-DD')
}

function write (date) {
  return moment(date, 'YYYY-MM-DD').valueOf()
}

export default {
  read: read,
  write: write
}
