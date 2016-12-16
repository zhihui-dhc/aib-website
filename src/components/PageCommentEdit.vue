<template>
  <div class="pz-comment-form-wrapper">
  <form class="pz-comment-form" v-on:submit.prevent.default="submitComment">
    <header>
      <menu class="left">
        <button class="btn-link btn-go-back" type="button" @click="goBack()">
          <i class="fa fa-close"></i>
        </button>
      </menu>
      <div class="title">Edit Comment</div>
      <menu class="right">
        <button class="btn-link" type="submit">Update</button>
      </menu>
    </header>
    <div class="pz-comment-form-body">
      <textarea
        v-model="editComment.comment.body"
        placeholder="Your comment"
        id="pz-comment-textarea"
        required>
      </textarea>
    </div>
  </form>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'editComment'
    ])
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    viewComment (commentId) {
      let postId = this.editComment.comment.postId
      let url = `/blog/${postId}/${commentId}`
      // console.log('browsing to', url)
      this.$router.push(url)
    },
    submitComment () {
      let comment = this.editComment.comment

      if (comment.body === '') {
        console.log('body is empty')
        return
      }
      if (comment.body.length < 3) {
        console.log('body is too short')
        return
      }

      this.$store.commit('updateComment', comment)
      this.viewComment(comment.id)
    }
  },
  mounted () {
    if (!firebase.auth().currentUser) { this.$router.push('/signin') }
    if (this.editComment.comment.id === '') { this.$router.push('/blog') }

    let ta = document.querySelector('#pz-comment-textarea')
    ta.focus()
    ta.setSelectionRange(ta.value.length, ta.value.length)
  }
}
</script>
