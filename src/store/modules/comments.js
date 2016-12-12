import data from '../json/comments.json'

const state = {
  all: data
}

const mutations = {
  upvoteComment (state, commentId) {
    let comment = state.all.find(c => c.id === commentId)
    comment.upvotes++
  },
  downvoteComment (state, commentId) {
    let comment = state.all.find(c => c.id === commentId)
    comment.downvotes++
  },
  addComment (state, comment) {
    // console.log('submitting comment', JSON.stringify(comment))
    state.all.push(comment)
  }
}

export default {
  state,
  mutations
}
