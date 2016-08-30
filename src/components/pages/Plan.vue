<template>
  <div class="header-padding"></div>
  <div class="master-detail-wrapper" v-bind:class="{ 'toc-visible': tocVisible }">
    <div class="article-wrapper">
      <plan-toc toc-visible="tocVisible"></plan-toc>
      <plan-content></plan-content>
    </div>
  </div>
</template>

<script>
import PlanToc from '../content/PlanToc.vue'
import PlanContent from '../content/PlanContent.vue'

export default {
  components: {
    PlanToc,
    PlanContent
  },
  data () {
    return {
      tocVisible: true
    }
  },
  methods: {
    toggleToc () {
      this.tocVisible = !this.tocVisible
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'
</style>
