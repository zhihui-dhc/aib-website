<template>
  <section class="section-cover stabilizeVH">
    <div class="cover-main">
      <h1>The Internet of Blockchains</h1>
      <div class="description">
        <p>Cosmos is a project with an ambitious mission: To create a network of distributed ledgers that will solve long-standing problems in the cryptocurrency and blockchain communities. <a class="read-more" @click="scrollDown">More&nbsp;&raquo;</a></p>
      </div>
      <cover-benefits></cover-benefits>
    </div>
    <cover-alert></cover-alert>
  </section>
</template>

<script>
import CoverBenefits from '../partials/CoverBenefits.vue'
import CoverAlert from '../partials/CoverAlert.vue'
import $ from 'jquery'

export default {
  components: {
    CoverBenefits,
    CoverAlert
  },
  methods: {
    scrollDown () {
      let height = $('#walkthrough-1').offset().top - 48
      $('html, body').animate({ scrollTop: height }, 666)
    },
    viewStep (id) {
      let scrollSpeed = 666
      let height = $(id).offset().top
      if (id !== '#walkthrough') { height -= 48 }
      $('html, body').animate({ scrollTop: height }, scrollSpeed)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'

.section-cover
  padding 5*x x 1.5*x

  display flex
  flex-flow column

.cover-main
  flex 1

  display flex
  flex-flow column
  justify-content center

h1
  font-size 1.5*x
  line-height 1.25
  font-weight bold
  text-transform uppercase

  margin 0 0 x
  max-width 30*x

.description
  max-width 36*x
  margin-bottom 1.5*x

  a
    text-decoration underline
    cursor pointer

@media screen and (max-width: 359px)
  .description
    flex 1

@media screen and (min-width: 400px)
  .section-cover
    padding-left 1.25*x
    padding-right 1.25*x

  h1
    font-size 1.75*x

  .description
    font-size 1.125*x

@media screen and (min-width: 768px)
  .section-cover
    align-items center
  .cover-main
    align-items center

  h1
    font-size 2*x
    padding-top 3*x
    text-align center

  .description
    text-align center
    margin-bottom 3*x

@media screen and (min-width: 1024px)
  .section-cover
    flex-flow row
    max-width 960px
    margin 0 auto

    align-items flex-start

  .cover-main
    flex 3
    align-items flex-start

  h1, .description
    text-align left

@media screen and (min-width: 1280px)
  .section-cover
    max-width 1200px

  .cover-main
    padding-top 2*x

</style>
