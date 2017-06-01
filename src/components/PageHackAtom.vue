<template>
  <div class="page-hackatom">
    <header class="ha-header">
      <div class="image"></div>
      <div class="ha-container">
        <main>
          <h1><strong>Hack</strong>Atom 2017</h1>
          <ul>
            <li>June 9 &ndash; July 9</li>
            <li>$50k to be won</li>
            <li>Participate from anywhere</li>
          </ul>
          <p><strong>HackAtom</strong> is seeking individuals and teams worldwide for a $50k hackathon from June 9 &ndash; July 9, 2017. Participants will turn innovative ideas into working applications, with rewards from the Cosmos community.</p>
          <p>HackAtom is four weeks long. You'll build a real product while the crypto and blockchain communities watch and cast their vote on the project that captures their imagination. Tell the story behind your innovative idea, turn it into a working product, get other members to join, and build something cool!</p>
        </main>
      </div>
    </header>

    <section class="ha-section judging">
      <div class="ha-container">
        <header>Prizes</header>
        <main>
          <p>There is $50,000 worth of ETH to be won. The prizes for the best apps are as follows:</p>
          <ul class="prizes">
            <li>
              <i class="fa fa-trophy"></i>
              <div class="key">Grand Prize</div>
              <div class="value">$20k worth of ETH</div>
            </li>
            <li>
              <i class="fa fa-trophy"></i>
              <div class="key">2nd Place</div>
              <div class="value">$10k worth of ETH</div>
            </li>
            <li>
              <i class="fa fa-trophy"></i>
              <div class="key">3rd Place</div>
              <div class="value">$6k worth of ETH</div>
            </li>
            <li>
              <i class="fa fa-trophy"></i>
              <div class="key">4th Place</div>
              <div class="value">$4k worth of ETH</div>
            </li>
          </ul>
        </main>
      </div>
    </section>

    <section class="ha-section judging">
      <div class="ha-container">
        <header>Participate from Anywhere</header>
        <main>
          <p>To participate in the hackathon, all you need to do is:</p>
          <ol>
            <li>Sign up</li>
            <li>Build your app</li>
            <li>Submit by July 9, 2017 at 10:00 AM PDT </li>
          </ol>
        </main>
      </div>
    </section>

    <section class="ha-section judging">
      <div class="ha-container">
        <header>Judging</header>
        <main>
          <p>We’re looking for a high level of professionalism and quality, and have invited experienced hackers and entrepreneurs to influence the competition right from the start. You’ll be rewarded by the judges and the community.</p>
          <card-person v-for="p in ppl" :person="p" :key="p.id">
          </card-person>
        </main>
      </div>
    </section>
    <section class="ha-section ha-section-join">
      <div class="ha-container">
        <header>Sign Up to Particpate</header>
        <main>
          <p>Enter your details in the form to participate in Cosmos HackAtom. You’ll receive further instructions on how to compete.</p>
          <btn
            type="anchor"
            :href="formLink"
            size="lg"
            icon="clock-o"
            value="Sign Up for HackAtom">
          </btn>
          <p>For inquiries about hackathon, please contact us at <a href="mailto:hello@tendermint.com">hello@tendermint.com</a>.</p>
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
    formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfLjR9_0W6AatYgbxYSVcsOx3Pw16GdV9kZDP_NgplOFHa-bA/viewform?usp=sf_link',
    mapKey: 'AIzaSyCw3IcF-q9yY_33PAFDPP4gJGfJQphN8M0'
  }),
  head: {
    title () {
      return {
        inner: 'HackAtom 2017',
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
  display flex
  h1
    font-size 3em
    font-weight 200
    line-height 1
    letter-spacing -0.03em
    color txt
    margin-bottom 1rem
    text-transform uppercase
    strong
      display block
      font-weight 600
  ul
    margin-bottom 1.5rem
    li
      font-size 1.125rem
  p
    font-size 1em
    margin-bottom 1.5rem
    &:last-child
      margin-bottom 0

.ha-section
  border-top 1px solid bc
  header
    font-weight 600
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
      &:last-child
        margin-bottom 0

    .prizes
      display flex
      flex-flow row wrap
      align-items center
      justify-content center
      padding 0.5rem
      margin -0.5rem
      li
        border 1px solid bc
        padding 1rem
        background c-app-fg
        margin 0.5rem

        display flex
        flex-flow column nowrap
        align-items center
        i.fa
          margin-bottom 0.5rem
          border 1px solid bc
          width 4rem
          height 4rem
          border-radius 2rem
          display flex
          align-items center
          justify-content center

          color light
          font-size 2rem
        .key
          font-weight bold
        .value
          color light
    ol
      max-width 24rem
      margin 0 auto
      text-align left
      li
        border 1px solid bc
        font-weight bold
        padding 1rem
        background c-app-fg
      li + li
        border-top none
        
  &.ha-section-location
    .ha-container
      padding-bottom 0
      main
        height 240px

  &.ha-section-join
    .ni-btn
      display inline-block
      margin-bottom 1.5rem

@media screen and (min-width: 768px)
  .ha-container
    padding 3em

  .ha-header
    display flex
    flex-flow row nowrap
    align-items stretch
    align-content stretch
    .image
      background #fff url('../assets/images/hackatom-header.jpg') center center no-repeat
      background-size cover
      width 192px
      height 512px
    .ha-container
      flex 1
      padding-top 3em
      padding-bottom 3em
    h1
      strong
        display inline

  .ha-section
    header
      text-align center
      font-size 1.75em
      font-weight bold

    header + main
      margin-top 1.5em

    main
      text-align center
      p
        max-width 40rem
        margin-left auto
        margin-right auto
      .prizes
        li
          padding 1.5rem

    &.ha-section-location
      .ha-container
        main, iframe
          height 360px

    &.ha-section-join
      main
        text-align center
      .ni-btn
        margin 0 auto 1.5rem

@media screen and (min-width: 1024px)
  .ha-header
    .image
      width 384px

@media screen and (min-width: 1200px)
  .ha-header
    .image
      width 512px
</style>
