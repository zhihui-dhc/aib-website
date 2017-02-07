export const setFaqElementsVisible =
  ({ commit }, value) => commit('setFaqElementsVisible')
export const setFaqTocVisible =
  ({ commit }, value) => commit('setFaqElementsVisible')
export const setWhitepaperElementsVisible =
  ({ commit }, value) => commit('setWhitepaperElementsVisible')
export const setWhitepaperTocVisible =
  ({ commit }, value) => commit('setWhitepaperToc')

export const removeComment =
  ({ commit }, commentId) => commit('removeComment')
export const upvoteComment =
  ({ commit }, commentId) => commit('upvoteComment')
export const undoUpvoteComment =
  ({ commit }, commentId) => commit('undoUpvoteComment')
export const downvoteComment =
  ({ commit }, commentId) => commit('downvoteComment')
export const undoDownvoteComment =
  ({ commit }, commentId) => commit('undoDownvoteComment')
export const addComment =
  ({ commit }, comment) => commit('addComment')
export const updateComment =
  ({ commit }, comment) => commit('updateComment')

export const setEditComment =
  ({ commit }, comment) => commit('setEditComment')
export const setNewCommentParent =
  ({ commit }, comment) => commit('setNewCommentParent')
export const setNewCommentParentId =
  ({ commit }, comment) => commit('setNewCommentParentId')
export const setNewCommentPostId =
  ({ commit }, postId) => commit('setNewCommentPostId')
export const resetNewComment =
  ({ commit }) => commit('resetNewComment')

export const setSessionRequest =
  ({ commit }, url) => commit('setSessionRequest')

export const setSessionUserDisplayName =
  ({ commit }, displayName) => commit('setSessionUserDisplayName')
export const setSessionUserEmail =
  ({ commit }, email) => commit('setSessionUserEmail')
export const setSessionUserPhotoUrl =
  ({ commit }, photoUrl) => commit('setSessionUserPhotoUrl')
export const setSessionUserUid =
  ({ commit }, uid) => commit('setSessionUserUid')

export const sessionDownvoteComment =
  ({ commit }, commentId) => commit('sessionDownvoteComment')
export const sessionUpvoteComment =
  ({ commit }, commentId) => commit('sessionUpvoteComment')
export const sessionClearVoteComment =
  ({ commit }, commentId) => commit('sessionClearVoteComment')
