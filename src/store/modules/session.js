import firebase from 'firebase'
let ref

function watchRef () {
  ref.on('child_added', function (snapshot, prevChildKey) {
    state.votes[snapshot.key] = snapshot.val()
    // console.log('votes added:', JSON.stringify(state.votes))
  })
  ref.on('child_changed', function (snapshot) {
    state.votes[snapshot.key] = snapshot.val()
    // console.log('votes changed:', JSON.stringify(state.votes))
  })
  ref.on('child_removed', function (snapshot) {
    delete state.votes[snapshot.key]
    // console.log('votes removed:', JSON.stringify(state.votes))
  })
}

firebase.auth().onAuthStateChanged(function (user) {
  state.votes = {}
  if (user) {
    // console.log('user logged in!')
    ref = firebase.database().ref(`users/${user.uid}/votes`)
  } else {
    // console.log('user logged out')
  }
  watchRef()
})

const emptyUser = {
  displayName: '',
  email: ''
}

const state = {
  request: '',
  user: JSON.parse(JSON.stringify(emptyUser)),
  votes: {}
}

const mutations = {
  setSessionRequest (state, url) {
    state.request = url
    // console.log('setting session request', url)
  },
  setSessionUser (state, user) {
    state.user = user
    // console.log('setting session user')
  },
  clearSessionUser (state) {
    state.user = JSON.parse(JSON.stringify(emptyUser))
    state.votes = {}
    // console.log('setting session user')
  },
  updateSessionUserName (state, name) {
    state.user.displayName = name
  },
  updateSessionUserEmail (state, email) {
    state.user.email = email
  },
  sessionDownvoteComment (state, commentId) {
    ref.child(commentId).set(-1)
  },
  sessionUpvoteComment (state, commentId) {
    ref.child(commentId).set(1)
  },
  sessionClearVoteComment (state, commentId) {
    // console.log('clearing vote')
    ref.child(commentId).set(null)
  }
}

export default {
  state,
  mutations
}
