<template>
  <div class="pz-comment">
    <div class="meta">
      <a class="author" href="#">{{ comment.author }}</a>
      <div class="date" :title="humanDate(comment.dateCreated)">
        {{ timeAgo(comment.dateCreated) }}
        </div>
    </div>
    <div class="body" v-html="markdown(comment.body)"></div>
    <div class="children"></div>
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
  props: ['comment'],
  methods: {
    markdown (body) {
      return md.render(body)
    },
    timeAgo (unixDate) {
      return moment(unixDate, 'x').fromNow()
    },
    humanDate (unixDate) {
      return moment(unixDate, 'x').format('YYYY-MM-DD HH:MM:SS')
    }
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.pz-comment
  padding 0.5rem 0.5rem 0

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
  .body
    line-height 1.333
    p
      margin-bottom 0.5rem
</style>
