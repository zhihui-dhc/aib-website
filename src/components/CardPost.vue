<template>
  <div class="card-post">
    <template v-if="url.substr(0,4) === 'http'">
      <a :href="url">
        <div class="title">{{ title }}</div>
        <div class="meta">{{ meta }}</div>
        <div class="desc">{{ desc }}</div>
      </a>
    </template>
    <template v-else>
      <router-link :to="url">
        <div class="title">{{ title }}</div>
        <div class="meta">{{ meta }}</div>
        <div class="desc">{{ desc }}</div>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  props: ['title', 'desc', 'meta', 'url']
}
</script>


<style lang="stylus">
@require '../styles/variables.styl'

.card-post
  margin 0 auto
  border-bottom 1px dotted bc

  a
    padding 1em
    display block
    color txt
    &:hover .title
      color link

  .title
    line-height 1.25
    color txt
    font-weight 400

  .meta
    color light
    font-size 0.875rem
    margin-top 0.5rem

  .desc
    max-width 40em

@media screen and (min-width: 360px)
  .card-post
    .title
      font-size 1.25rem
    .meta
      font-size 1rem

@media screen and (min-width: 720px)
  .card-post
    font-size 1.125*x
    a
      padding 1.5rem
</style>
