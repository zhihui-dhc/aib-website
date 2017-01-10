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
    margin-right 15rem + 1rem

@media screen and (min-width: 1200px)
  .toc-padding.toc-visible
    margin-right 20rem + 1rem

@media screen and (min-width: 1800px)
  .toc-padding.toc-visible
    margin-right 25rem + 1rem
</style>
