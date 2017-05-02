<template>
  <div class="page">
    <header class="ha-header">
      <div class="ha-container">
        <h1><strong>HackAtom</strong> NYC</h1>
        <p><i class="fa fa-calendar-o"></i> May $DATETIME, 2017</p>
      </div>
    </header>
    <section class="ha-section contact">
      <div class="ha-container">
        <header>About HackAtom</header>
        <main>
          <p>HackAtom NYC is a $DURATION Cosmos hackathon on May $DATETIME, 2017. This event is aimed for hackers interested in developing applications on the Internet of Blockchains. The Cosmos team will be there to help you realize your visions.</p>
          <p>The hackathon will be located in $VENUE in NYC during May $DATETIME. We'd love to see what you can create. Come join us!</p>
        </main>
      </div>
    </section>
    <section class="ha-section">
      <div class="ha-container">
        <header>Agenda</header>
        <main>
          <p>$TUESDAY</p>
          <p>$WEDNESDAY</p>
        </main>
      </div>
    </section>
    <section class="ha-section">
      <div class="ha-container">
        <header>Challenges &amp; Awards</header>
        <main>
          <p>$CHALLENGE</p>
          <p>$CHALLENGE</p>
        </main>
      </div>
    </section>
    <section class="ha-section">
      <div class="ha-container">
        <header>Judges</header>
        <main>
          <card-person v-for="person in ppl('hackatom')" :person="person"></card-person>
        </main>
      </div>
    </section>
    <section class="ha-section ha-section-location">
      <div class="ha-container">
        <header>Location</header>
        <main>
          <iframe
            width="100%"
            height="240"
            frameborder="0"
            style="border:0"
            :src="locationUrl"
            allowfullscreen>
          </iframe>
        </main>
      </div>
    </section>
    <section class="ha-section contact">
      <div class="ha-container">
        <header>Questions?</header>
        <main>
          <p>For any inquiries about sponsoring or attending the hackathon, please contact <a href="mailto:hello@tendermint.com">hello@tendermint.com</a>.</p>
        </main>
      </div>
    </section>
    <section class="ha-section hashtag">
      <div class="ha-container">
        <header><a href="https://twitter.com/intent/tweet?text=I'm%20going%20to%20%23hackatom2017"><i class="fa fa-twatter"></i> #hackatom2017</a></header>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardPerson from './CardPerson'
import NiSection from './NiSection'
import PageHeader from '@nylira/vue-page-header'
export default {
  name: 'page-hackatom',
  components: {
    CardPerson,
    NiSection,
    PageHeader
  },
  computed: {
    ...mapGetters(['allPeople']),
    locationUrl () {
      return `https://www.google.com/maps/embed/v1/place?key=${this.mapKey}&q=Manhattan,+New+York,+NY`
    }
  },
  data: () => ({
    mapKey: 'AIzaSyCw3IcF-q9yY_33PAFDPP4gJGfJQphN8M0'
  }),
  head: {
    title () {
      return {
        inner: 'HackAtom NYC',
        separator: '-',
        complement: this.$t('site.title')
      }
    }
  },
  methods: {
    ppl (tag) { return this.allPeople.filter(p => p.tags.includes(tag)) }
  }
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.ha-container
  max-width 1024px
  margin 0 auto
  padding 1.5em

.ha-header
  background url('../assets/images/city-bokeh.jpg') center center no-repeat
  background-size cover
  .ha-container
    padding-top 3em
    padding-bottom 3em
  h1
    font-size 3em
    font-weight 200
    line-height 1
    letter-spacing -0.03em
    color c-app-fg
    margin-bottom 2rem
    text-shadow hsla(0,0,0,0.75) 0 0.25rem 0.5rem
    strong
      display block
      font-weight 700
      color #fff
  p
    font-size 1.25em
    color c-app-fg
    text-shadow hsla(0,0,0,0.75) 0 0.125rem 0.25rem
    i.fa
      margin-right 0.25rem

.ha-section
  border-top 1px solid bc
  header
    font-weight 500
    font-size 1.25em
  header + main
    margin-top 0.75rem
  main
    iframe
      position absolute
      left 0
      width 100%
    p
      margin-bottom 1.5em
      &:last-of-type
        margin-bottom 0
        
  &.ha-section-location
    .ha-container
      padding-bottom 0
      main
        height 240px

@media screen and (min-width: 360px)
  .ha-header
    h1
      font-size 3.5em
    p
      font-size 1.5em
  .ha-section
    header
      font-size 1.375em
    header + main
      margin-top 1rem

@media screen and (min-width: 768px)
  .ha-container
    padding 3em
  .ha-header
    text-align center
    .ha-container
      padding-top 6em
      padding-bottom 6em
    h1
      strong
        display inline
    p
      font-size 1.75em
  .ha-section
    header
      text-align center
      font-size 1.75em
      font-weight bold
    header + main
      margin-top 1.5em
    main
      p
        max-width 36rem
        margin-left auto
        margin-right auto
        font-size 1.25em
    &.ha-section-location
      .ha-container
        main, iframe
          height 360px
</style>
