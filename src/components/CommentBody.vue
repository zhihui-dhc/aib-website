<template>
  <div class="pz-comment-body">
    <div class="meta">
      <a class="author" href="#">{{ comment.author }}</a>
      <div class="date" :title="humanDate(comment.dateCreated)">
        {{ timeAgo(comment.dateCreated) }}
      </div>
    </div>
    <div class="body" v-html="markdown(comment.body)"></div>
    <menu>
      <a href="#"><i class="fa fa-ellipsis-h"></i></a>
      <div class="divider"></div>
      <a @click="setCommentFormVisible(true)"><i class="fa fa-reply"></i></a>
      <div class="divider"></div>
      <div class="score">
        <a class="down" @click="downvote"><i class="fa fa-chevron-down"></i></a>
        <span class="value">{{ comment.score }}</span>
        <a class="up" @click="upvote"><i class="fa fa-chevron-up"></i></a>
      </div>
    </menu>
  </div>
</template>

<script>
import moment from 'moment'
let md = require('markdown-it')({
  preset: 'default',
  html: true,
  linkify: true,
  typographer: true
})
export default {
  methods: {
    markdown (body) {
      return md.render(body)
    },
    timeAgo (unixDate) {
      return moment(unixDate, 'x').fromNow()
    },
    humanDate (unixDate) {
      return moment(unixDate, 'x').format('YYYY-MM-DD HH:MM:SS')
    },
    upvote () {
      this.$store.commit('upvoteComment', this.comment.id)
    },
    downvote () {
      this.$store.commit('downvoteComment', this.comment.id)
    },
    setCommentFormVisible (value) {
      this.$store.commit('setCommentFormVisible', value)
    }
  },
  props: ['comment']
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.pz-comment-body
  max-width 40rem
  .meta
    display flex
    font-size 0.75rem
    margin-bottom 0.25rem

    a.author
      margin-right 0.25rem
      font-weight 500
      color txt
      &:hover
        color link

    .date
      color light
      margin-right 0.25rem
    .score
      color light
      .value
        color link
  .body
    line-height 1.333
    padding-right 0.5rem
    p
      padding-bottom 0.5rem

  menu
    display flex
    flex-flow row nowrap
    justify-content flex-end

    font-size 0.75rem
    color light

    .divider
      border-right 1px solid lighten(bc,50%)
    a
      padding 0 0.75rem
      color light
      cursor pointer
      &:hover
        color link
    .score
      display flex
      a.down
        padding-right 0.5rem
      a.up
        padding-left 0.5rem
      .value
        flex 1
        text-align center
        font-weight 500
        min-width 1.75rem
</style>
