import data from '../json/comments.json'

const state = {
  all: data
}

const mutations = {
  upvoteComment (state, commentId) {
    let comment = state.all.find(c => c.id === commentId)
    comment.score += 1
  },
  downvoteComment (state, commentId) {
    let comment = state.all.find(c => c.id === commentId)
    comment.score -= 1
  },
  addComment (state, comment) {
    console.log('submitting comment', comment)
    state.all.push(comment)
  }
}

export default {
  state,
  mutations
}
