import shortid from 'shortid'

const emptyComment = {
  id: shortid.generate(),
  author: 'CosmosUser',
  dateCreated: +new Date(),
  body: '',
  postId: '',
  score: 0,
  parentId: ''
}

const state = {
  parentComment: {
    author: '',
    dateCreated: 0,
    body: ''
  },
  comment: JSON.parse(JSON.stringify(emptyComment))
}

const mutations = {
  resetNewComment (state) {
    // console.log('resetting new comment...')
    state.comment = JSON.parse(JSON.stringify(emptyComment))
  },
  setNewCommentPostId (state, postId) {
    // console.log('set new comment post id to ', postId)
    state.comment.postId = postId
  },
  setNewCommentParent (state, comment) {
    // console.log('set new comment parent to ', comment.author, comment.body)
    state.parentComment.author = comment.author
    state.parentComment.dateCreated = comment.dateCreated
    state.parentComment.body = comment.body
    state.comment.parentId = comment.id
  }
}

export default {
  state,
  mutations
}
