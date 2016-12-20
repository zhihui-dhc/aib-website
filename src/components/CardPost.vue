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

  border-bottom 0.25rem solid c-app-fg

  &:last-of-type
    border-bottom none

  a
    padding 1em
    display block
    color txt
    &:hover .title
      color link

  .title
    line-height 1.25
    font-size 1.125em
    color txt

  .meta
    color light

  .desc
    max-width 40em

@media screen and (min-width: 360px)
  .card-post
    .title
      font-size 1.125em
    .meta
      font-size 0.85em

@media screen and (min-width: 720px)
  .card-post
    font-size 1.125*x
    a
      padding 1.5rem
</style>
