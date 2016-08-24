import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDVH0jNm7iB0Qbx_QxU8dLum881MNcrre4',
  authDomain: 'cosmos-5096c.firebaseapp.com',
  databaseURL: 'https://cosmos-5096c.firebaseio.com',
  storageBucket: ''
}

firebase.initializeApp(config)

let auth = firebase.auth()
let db = firebase.database()

module.exports = {
  auth: auth,
  db: db
}
