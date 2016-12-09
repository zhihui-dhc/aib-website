let localData = window.localStorage.getItem('userLocal')
let data = {}

if (localData) {
  data = localData
} else {
  data = {
    commentFormVisible: false
  }
}

const state = data

const mutations = {
  setCommentFormVisible (state, value) {
    console.log('setting comment form visible')
    state.commentFormVisible = value
  }
}

export default {
  state,
  mutations
}
