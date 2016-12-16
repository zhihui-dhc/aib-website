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
    // console.log('setting session request', url)
    state.requestedUrl = url
  },
  setSessionUser (state, user) {
    // console.log('setting session user')
    state.user = user
  },
  clearSessionUser (state) {
    // console.log('setting session user')
    state.user = JSON.parse(JSON.stringify(emptyUser))
  }
}

export default {
  state,
  mutations
}
