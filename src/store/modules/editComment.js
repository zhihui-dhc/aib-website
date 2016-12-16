const state = {
  comment: {}
}

const mutations = {
  setEditComment (state, comment) {
    state.comment = comment
  }
}

export default {
  state,
  mutations
}
