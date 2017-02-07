const emptyParent = {
  userId: '',
  dateCreated: 0,
  body: ''
}
const emptyComment = {
  id: '',
  userId: 'CosmosUser',
  dateCreated: 0,
  body: '',
  upvotes: 0,
  downvotes: 0,
  parentId: '',
  postId: ''
}

const state = {
  parentComment: JSON.parse(JSON.stringify(emptyParent)),
  comment: JSON.parse(JSON.stringify(emptyComment))
}

const mutations = {
  resetNewComment (state) {
    // console.log('resetting new comment...')
    state.parentComment = JSON.parse(JSON.stringify(emptyParent))
    state.comment = JSON.parse(JSON.stringify(emptyComment))
  },
  setNewCommentPostId (state, postId) {
    // console.log('set new comment post id to ', postId)
    state.comment.postId = postId
  },
  setNewCommentParentId (state, parentId) {
    // console.log('set new comment parent id to ', postId)
    state.comment.parentId = parentId
  },
  setNewCommentParent (state, comment) {
    console.log('set new comment parent to ', comment.userId, comment.body)
    state.parentComment.userId = comment.userId
    state.parentComment.dateCreated = comment.dateCreated
    state.parentComment.body = comment.body
  }
}

export default {
  state,
  mutations
}
