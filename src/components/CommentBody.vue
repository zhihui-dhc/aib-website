<template>
  <div class="pz-comment-body">
    <div class="meta">
      <a class="author" href="#">{{ comment.author }}</a>
      <div class="date" :title="humanDate(comment.dateCreated)">
        {{ timeAgo(comment.dateCreated) }}
      </div>
    </div>
    <div class="pz-comment-text" v-html="markdown(comment.body)"></div>
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
    }
  },
  props: ['comment']
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.pz-comment-body
  max-width 40rem
  font-size 0.875rem
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

.pz-comment-text
  line-height 1.333
  padding-right 0.5rem

  hr
    border none
    border-top 4px solid bc
    background transparent
    height 0
    margin 0
    padding 0
    margin 2*x 0
  a
    &:hover
      text-decoration underline

  strong
    font-weight bold

  em
    font-style italic

  code
    font-family Consolas, 'Deja Vu Sans Mono', 'Andale Sans Mono', monospace
    background #f0f0f0
    margin 0 0 1.5*x

  pre
    background #f0f0f0
    overflow-x scroll
    margin-bottom 1.5*x
    margin-left -1*x
    margin-right -1*x
    padding 0.375*x 0.5*x
    font-size 0.875*x
    line-height 1.25
    code
      margin-bottom 0

  /* These are technically the same, but use both */
  overflow-wrap break-word
  word-wrap break-word

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  hyphens auto

  p, ul, ol, table, blockquote, img, .btn
    padding-bottom 0.5em

  p
    code
      &:before, &:after
        letter-spacing -0.375em
        content "\00a0"
   img
      margin 0

  img
    max-width 100%

  h1, h2, h3, h4, h5, h6
    font-family sans
    color txt
    font-weight 400
    margin-bottom 0.5rem

  h1
    font-size 1.25*x
    font-weight 600
  h2
    font-size 1.25*x
  h3
    font-size 1.125*x
    font-weight 600
  h4
    font-size 1.125*x
  h5
    font-size x
    font-weight 600
  h6
    font-size x
    text-decoration underline

  ul, ol
    padding-left 1.5em

  ul li
    list-style square
    margin-bottom 0.25em

  ol li
    list-style decimal

  table
    border 1px solid #ddd
    border-collapse collapse
    width 100%

    th
      font-weight 600
      background hsl(mhue,msat,95%)
      color mcolor

    td, th
      border 1px solid bc
      padding 0.25em .5em

  blockquote
    border 1px solid lighten(mcolor,85%)
    padding 0.75*x x
    background lighten(mcolor,95%)
    position relative

    color mcolor
  
    p, ul, ol
      margin-bottom 0.5rem

    p:last-child, ul:last-child, ol:last-child
      margin-bottom 0
</style>
