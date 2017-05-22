<template>
  <div class="page">
    <header class="ha-header">
      <div class="ha-container">
        <h1>Cosmos // <strong>HackAtom</strong> 2017</h1>
        <p>Shanghai, NYC, SF &middot; 4 weeks &middot; $50,000</p>
        <btn
          type="anchor"
          href="https://docs.google.com/forms/d/1WWaxvQTA6zIxf4Nbdqfj1CCq7IxlMnO3Ycpjx9D6YT8"
          size="lg"
          icon="clock-o"
          value="Register Now">
        </btn>
      </div>
    </header>
    <section class="ha-section about">
      <div class="ha-container">
        <header>About</header>
        <main>
          <p><strong>HackAtom</strong> is searching for applicants for a $50,000 dollar hackathon. Participants will turn innovative ideas into working applications, with rewards from the Cosmos community.</p>
        </main>
      </div>
    </section>
    <section class="ha-section ha-section-event">
      <div class="ha-container">
        <header>Event</header>
        <main>
          <p>The HackAtom event is 4 weeks long. You’ll be part of a team, building a real product while the crypto and blockchain community watches and casts their vote on what captures their imagination. Tell the story behind your innovative idea, turn it into a working product, get other members to join and build something cool!</p>
        </main>
      </div>
    </section>
    <section class="ha-section judging">
      <div class="ha-container">
        <header>Judging</header>
        <main>
          <p>We’re looking for a high level of professionalism and quality, and have invited experienced hackers and entrepreneurs to influence the competition right from the start. You’ll be rewarded by the judges and the community, with first prize being $50,000!</p>
        </main>
      </div>
    </section>
    <section class="ha-section ha-section-join">
      <div class="ha-container">
        <header>Join</header>
        <main>
          <btn
            type="anchor"
            href="https://docs.google.com/forms/d/1WWaxvQTA6zIxf4Nbdqfj1CCq7IxlMnO3Ycpjx9D6YT8"
            size="lg"
            icon="clock-o"
            value="Register for HackAtom">
          </btn>
          <p>For any inquiries about sponsoring or attending the hackathon, please contact <a href="mailto:hello@tendermint.com">hello@tendermint.com</a>.</p>
        </main>
      </div>
    </section>
    <section class="ha-section ha-section-hashtag">
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
import Btn from '@nylira/vue-button'
export default {
  name: 'page-hackatom',
  components: {
    Btn,
    CardPerson,
    NiSection,
    PageHeader
  },
  computed: {
    ...mapGetters(['allPeople'])
  },
  data: () => ({
    mapKey: 'AIzaSyCw3IcF-q9yY_33PAFDPP4gJGfJQphN8M0'
  }),
  head: {
    title () {
      return {
        inner: 'HackAtom NYC',
        separator: '-',
        complement: 'Cosmos - Internet of Blockchains'
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
  background #3c405e url('../assets/images/city-bokeh.jpg') center center no-repeat
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
    text-shadow hsla(0,0,0,0.5) 0 0.125rem 0.5rem
    strong
      display block
      font-weight 700
      color #fff
  p
    font-size 1.25em
    color c-app-fg
    text-shadow hsla(0,0,0,0.5) 0 0.125rem 0.25rem
    margin-bottom 1.5em
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
  &.ha-section-join
    .ni-btn
      display inline-block
      margin-bottom 1.5rem

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

    &.ha-section-join
      main
        text-align center
      .ni-btn
        margin 0 auto 1.5rem
</style>
