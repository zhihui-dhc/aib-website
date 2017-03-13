<template>
  <div class="app-bottom" v-bind:class="{ 'toc-visible': tocVisible }">
    <section-call-to-action></section-call-to-action>
    <footer class="app-footer">
      <div class="sections">
        <section>
          <span>&copy; 2016 Cosmos Network Foundation</span>
        </section>
        <section>
          <header>Cosmos</header>
          <nav>
            <router-link :to="'/blog'">Blog</router-link>
            <router-link :to="'/plan'">Plan</router-link>
            <router-link :to="'/faq'">FAQ</router-link>
            <router-link :to="'/whitepaper'">Whitepaper</router-link>
            <a href="https://github.com/cosmos/cosmos">GitHub</a>
          </nav>
        </section>
        <section>
          <header>Community</header>
          <a href="https://bitcointalk.org/index.php?topic=1607111.0">
            <i class="fa fa-btc"></i>BitcoinTalk
          </a>
          <a href="http://webchat.freenode.net/?channels=%23cosmos_network">
            <i class="fa fa-commenting-o"></i>IRC
          </a>
          <a href="https://www.reddit.com/r/thecosmos">
            <i class="fa fa-reddit"></i>Reddit
          </a>
          <a href="http://slack.cosmos.network">
            <i class="fa fa-slick"></i>Slack
          </a>
          <a href="https://twitter.com/cosmos_hq">
            <i class="fa fa-twatter"></i>Twitter
          </a>
        </section>
        <section>
          <header>Tendermint</header>
          <a href="https://tendermint.com/blog">Blog</a>
          <a href="https://tendermint.com/about">About</a>
          <a href="https://tendermint.com/careers">Careers</a>
          <a href="https://tendermint.com/press">Press</a>
          <a href="https://tendermint.com/contact">Contact</a>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SectionCallToAction from './SectionCallToAction'
export default {
  name: 'app-footer',
  components: {
    SectionCallToAction
  },
  computed: {
    ...mapGetters([
      'faqTocVisible',
      'whitepaperTocVisible'
    ]),
    tocVisible () {
      let name = this.$route.name
      let visible = false
      if (name === 'faq' && this.faqTocVisible) { visible = true }
      if (name === 'whitepaper' && this.whitepaperTocVisible) { visible = true }
      return visible
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.app-footer
  .sections
    padding 1rem 0
    color c-app-fg
    margin 0 auto

    display flex
    flex-flow row wrap

  section
    flex 0 0 50%
    padding 1rem 0.5rem

    header
      padding 0.25rem 0.5rem

      color light

      font-size 0.75rem
      font-weight bold
      text-transform uppercase
      letter-spacing 0.0625em

    a, span
      color txt
      display block
      padding 0.25rem 0.5rem
      i.fa
        display inine-block
        text-align center
        width 1.5rem
        margin-right 0.5rem

@media screen and (min-width: 360px)
  .app-footer
    .sections
      padding 1rem 0.5rem
    .section
      padding 1rem

@media screen and (min-width: 414px)
  .app-footer
    .sections
      padding 1rem

@media screen and (min-width: 768px)
  .app-footer
    .sections
      padding 2rem
    section
      flex 0 0 25%
      header
        margin-bottom 1rem

@media screen and (min-width: 1024px)
  .app-bottom.toc-visible
    margin-left 20rem

  .app-footer
    .sections
      max-width 1024px
    section
      flex 0 0 25%

@media screen and (min-width: 1280px)
  .app-bottom.toc-visible
    margin-left 26rem

  .app-footer
    .sections
      max-width 1280px
    section
      flex 0 0 25%
</style>
