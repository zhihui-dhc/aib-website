<template>
  <div class="pz-comment">
    <div class="meta">
      <a class="author" href="#">{{ comment.author }}</a>
      <div class="date" :title="humanDate(comment.dateCreated)">
        {{ timeAgo(comment.dateCreated) }}
        </div>
    </div>
    <div class="body" v-html="markdown(comment.body)"></div>
    <div class="children">
      <template
        v-for="childComment in childComments"
        
      >
      {{ childComment.body }}
      </template>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import Comment from './Comment'
import { mapGetters } from 'vuex'
let md = require('markdown-it')({
  preset: 'default',
  html: true,
  linkify: true,
  typographer: true
})
export default {
  components: {
    Comment
  },
  computed: {
    childComments () {
      let children = []
      children.push(this.allComments[10])
      return children
    },
    ...mapGetters([
      'allComments'
    ])
  },
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
  },
  props: ['comment']
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
