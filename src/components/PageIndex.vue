<template>
  <div>
    <section-cover></section-cover>

    <div class="section-home sh-video">
      <h2>What is Cosmos?</h2>
      <iframe src="https://player.vimeo.com/video/183530279?title=0&byline=0&portrait=0" width="960" height="540" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>

    <section class="section-home sh-text" id="home-intro">
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
    <section class="section-home">
      <div class="section-container">
        <div class="image"><img class="" src="../assets/images/ex_dist_exchange.png"></div>
        <div class="section-content">
          <h2>{{ $t('sectionHomeInteroperability.title') }}</h2>
          <p v-html="$t('sectionHomeInteroperability.text')"></p>
        </div>
      </div>
    </section>
    <section class="section-home sh-alt">
      <div class="section-container">
        <div class="image"><img class="" src="../assets/images/ex_evm_sharding.png"></div>
        <div class="section-content">
          <h2>{{ $t('sectionHomeScalability.title') }}</h2>
          <p v-html="$t('sectionHomeScalability.text')"></p>
        </div>
      </div>
    </section>
    <section class="section-home">
      <div class="section-container">
        <div class="image"><img class="" src="../assets/images/ex_evm_upgrading.png"></div>
        <div class="section-content">
          <h2>{{ $t('sectionHomeUpgradability.title') }}</h2>
          <p v-html="$t('sectionHomeUpgradability.text')"></p>
        </div>
      </div>
    </section>
    <section class="section-home sh-alt">
      <div class="section-container">
        <div class="image image-taller"><img class="" src="../assets/images/ex_network.png"></div>
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
import SectionCover from './SectionCover'
import SectionCallToAction from './SectionCallToAction'

export default {
  name: 'page-index',
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

<style lang="stylus">
@import '../styles/variables.styl'

.section-home
  border-top dbd

  &#home-intro
    .btn
      max-width 13*x
      margin 0 auto
      margin-top 2*x

  &.sh-video
    padding 3rem 0
    iframe
      width 100vw
      height 56.25vw
      display block
      max-width 960px
      max-height 540px
      margin-left auto
      margin-right auto

  .section-container
    padding 3rem 1rem
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
    margin-bottom 1rem
    text-align center

  h2 + .section-content
  h2 + iframe
    margin-top 2rem

  h3
    font-size 1.25rem
    margin-bottom 0.5rem

  p
    margin 0 0 1.5rem

@media screen and (min-width:720px)
  .section-home
    h2
      font-size 2rem

    h3
      font-size 1.5rem

    &.sh-video
      iframe
        margin-top 1.5rem

@media screen and (min-width: 960px)
  .section-home
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

    &.sh-video
      .section-container
        display block

        h2
          margin-bottom 3rem

    &.sh-text
      .section-container
        display block

        .section-content
          column-count 2
          column-gap 3rem
        h2
          margin-bottom 3rem

    &.sh-alt
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
  .section-home
    .section-container
      max-width 64rem

      .image
        padding-right 3rem

      .section-content
        padding-left 3rem

    &.sh-text
      .section-container
        max-width 72rem
        .section-content
          column-gap 4rem
</style>
