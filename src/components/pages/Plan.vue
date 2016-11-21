<template>
  <div>
    <div class="header-padding"></div>
    <div class="article-wrapper">
      <plan-content></plan-content>
    </div>
  </div>
</template>

<script>
import PlanContent from '../content/PlanContent.vue'

export default {
  components: {
    PlanContent
  },
  head: {
    title: {
      inner: 'FAQ'
    }
  }
}
</script>
