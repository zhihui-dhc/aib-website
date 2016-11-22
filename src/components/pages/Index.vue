<template>
  <div>
    <section-cover></section-cover>
    <section class="section-slide ss-text" id="home-intro">
      <div class="section-container">
        <h2>{{ $t('sectionHomeIntro.title') }}</h2>
        <div class="section-content">
          <h3>{{ $t('sectionHomeIntro.purpose') }}</h3>
          <p v-html="$t('sectionHomeIntro.purposeText')"></p>
          <h3>{{ $t('sectionHomeIntro.architecture') }}</h3>
          <p v-html="$t('sectionHomeIntro.architectureText')"></p>
          <h3>{{ $t('sectionHomeIntro.cosmosHub') }}</h3>
          <p v-html="$t('sectionHomeIntro.cosmosHubText')"></p>
        </div>
        <router-link to="/whitepaper" class="btn">{{ $t('sectionHomeIntro.readTheWhitepaper') }}</router-link>
      </div>
    </section>
    <section-call-to-action></section-call-to-action>
    <section class="section-slide">
      <div class="section-container">
        <div class="image"><img class="" src="../../assets/images/ex_dist_exchange.png"></div>
        <div class="section-content">
          <h2>{{ $t('sectionHomeInteroperability.title') }}</h2>
          <p v-html="$t('sectionHomeInteroperability.text')"></p>
        </div>
      </div>
    </section>
    <section class="section-slide ss-alt">
      <div class="section-container">
        <div class="image"><img class="" src="../../assets/images/ex_evm_sharding.png"></div>
        <div class="section-content">
          <h2>{{ $t('sectionHomeScalability.title') }}</h2>
          <p v-html="$t('sectionHomeScalability.text')"></p>
        </div>
      </div>
    </section>
    <section class="section-slide">
      <div class="section-container">
        <div class="image"><img class="" src="../../assets/images/ex_evm_upgrading.png"></div>
        <div class="section-content">
          <h2>{{ $t('sectionHomeUpgradability.title') }}</h2>
          <p v-html="$t('sectionHomeUpgradability.text')"></p>
        </div>
      </div>
    </section>
    <section class="section-slide ss-alt">
      <div class="section-container">
        <div class="image image-taller"><img class="" src="../../assets/images/ex_network.png"></div>
        <div class="section-content">
          <h2>{{ $t('sectionHomeDecentralization.title') }}</h2>
          <p v-html="$t('sectionHomeDecentralization.textOne')"></p>
        </div>
        <div class="section-content section-content-extended">
          <p v-html="$t('sectionHomeDecentralization.textTwo')"></p>
        </p>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import SectionCover from '../sections/Cover.vue'
import SectionCallToAction from '../sections/CallToAction.vue'

export default {
  components: {
    SectionCover,
    SectionCallToAction
  },
  head: {
    title () {
      return {
        inner: 'Cosmos',
        separator: '-',
        complement: this.$t('site.networkOfBlockchains')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'

.section-slide
  border-top dbd

  .section-container
    padding 3rem 1.5rem 1.5rem
    max-width 32rem
    margin 0 auto

    .image
      margin 0 0 2rem
      img
        display block
        margin 0 auto
        width 75%
        max-width 26rem

    h2
      font-size 1.5rem
      margin 0 0 1rem
      text-align center
      letter-spacing 0.01em

    h3
      font-size 1.25rem
      font-weight 400
      margin 0 0 0.5rem

    p
      margin 0 0 1.5rem

  &#home-intro
    .btn
      max-width 13*x
      margin 0 auto
      margin-top 2*x

@media screen and (min-width:720px)
  .section-slide
    .section-container
      h2
        font-size 2em

@media screen and (min-width: 960px)
  .section-slide
    .section-container
      max-width 56rem
      display flex
      align-items center
      flex-flow row wrap
      padding 4.5rem 0

      .image, .section-content
        flex 1 0 50%

      .image
        padding-right 2rem
        margin 0

      .section-content
        padding-left 2rem

        h2
          text-align left

    &.ss-text
      .section-container
        display block

        .section-content
          column-count 2
          column-gap 3rem
        h2
          margin-bottom 3rem

    &.ss-alt
      .section-container
        flex-direction row-reverse
        .image
          padding-right 0
          padding-left 2rem
        .section-content
          padding-left 0
          padding-right 2rem
          &.section-content-extended
            padding 0
            padding-right 2rem
            margin-right 50%

@media screen and (min-width: 1200px)
  .section-slide
    .section-container
      max-width 64rem

      .image
        padding-right 3rem

      .section-content
        padding-left 3rem

    &.ss-text
      .section-container
        max-width 72rem
        .section-content
          column-gap 4rem
</style>
