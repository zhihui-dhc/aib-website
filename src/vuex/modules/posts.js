import firebase from '../../scripts/firebase.js'
let ref = firebase.db.ref('posts')

ref.on('child_added', function (snapshot, prevChildKey) {
  let child = snapshot.val()
  child.id = snapshot.key
  state.posts.push(child)
})

ref.on('child_changed', function (snapshot) {
  let newChild = snapshot.val()
  newChild.id = snapshot.key
  let currentChild = state.posts.find(p => p.id === newChild.id)
  state.posts.splice(state.posts.indexOf(currentChild), 1, newChild)
})

const mutations = {
  TOGGLE_POST (state, panelId) {
    let active = state.posts.find(p => p.id === panelId).active
    ref.child(panelId + '/active').set(!active)
  }
}

const state = {
  posts: []
}

export default {
  state,
  mutations
}
