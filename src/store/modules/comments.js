import firebase from '../../scripts/firebase.js'
let ref = firebase.db.ref('comments')

const state = {
  all: []
}

ref.on('child_added', function (snapshot, prevChildKey) {
  let child = snapshot.val()
  child.id = snapshot.key
  state.all.push(child)
})

ref.on('child_changed', function (snapshot) {
  let newChild = snapshot.val()
  newChild.id = snapshot.key
  let oldChild = state.all.find(c => c.id === newChild.id)
  state.all.splice(state.all.indexOf(oldChild), 1, newChild)
})

ref.on('child_removed', function (snapshot) {
  console.log('child removed!')
  let child = snapshot.val()
  child.id = snapshot.key
  state.all.splice(state.all.indexOf(child), 1)
})

const mutations = {
  removeComment (state, commentId) {
    console.log('removing comment', commentId)
    ref.child(commentId).remove()
  },
  upvoteComment (state, commentId) {
    let oldVal = state.all.find(c => c.id === commentId).upvotes
    let newVal = JSON.parse(JSON.stringify(oldVal)) + 1
    ref.child(commentId).update({ upvotes: newVal })
  },
  downvoteComment (state, commentId) {
    let oldVal = state.all.find(c => c.id === commentId).downvotes
    let newVal = JSON.parse(JSON.stringify(oldVal)) + 1
    ref.child(commentId).update({ downvotes: newVal })
  },
  addComment (state, comment) {
    console.log('submitting comment', comment)
    comment.dateCreated = +new Date()
    ref.child(comment.id).set(comment)
  },
  updateComment (state, comment) {
    console.log('updating comment', comment)
    comment.dateUpdated = +new Date()
    ref.child(comment.id).set(comment)
  }
}

export default {
  state,
  mutations
}
