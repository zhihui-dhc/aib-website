import moment from 'moment'

function read (date) {
  return moment(date, 'x').format('YYYY-MM-DD HH:mm')
}

function write (date) {
  return moment(date, 'YYYY-MM-DD HH:mm').valueOf()
}

export default {
  read: read,
  write: write
}
