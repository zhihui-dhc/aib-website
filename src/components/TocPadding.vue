<template>
  <div class="toc-padding">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'toc-padding'
}
</script>

<style lang="stylus">
@media screen and (min-width: 960px)
  .toc-padding.toc-visible
    margin-left 20rem

@media screen and (min-width: 1200px)
  .toc-padding.toc-visible
    margin-left 26rem
</style>
