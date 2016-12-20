const emptyUser = {
  displayName: '',
  email: ''
}

const state = {
  request: '',
  user: JSON.parse(JSON.stringify(emptyUser))
}

const mutations = {
  setSessionRequest (state, url) {
    state.request = url
    console.log('setting session request', url)
  },
  setSessionUser (state, user) {
    // console.log('setting session user')
    state.user = user
  },
  clearSessionUser (state) {
    // console.log('setting session user')
    state.user = JSON.parse(JSON.stringify(emptyUser))
  },
  updateSessionUserName (state, name) {
    state.user.displayName = name
  },
  updateSessionUserEmail (state, email) {
    state.user.email = email
  }
}

export default {
  state,
  mutations
}
