<template>
  <div id="cover-benefits">
    <li @click="viewStep('#walkthrough-2')">
      <div class="key"><i class="material-icons">check</i><span>Interoperability</span></div>
      <div class="value">Trade BTC for ETH directly. No more risk and fees of an intermediary centralized exchange.</div>
    </li>
    <li @click="viewStep('#walkthrough-3')">
      <div class="key"><i class="material-icons">check</i><span>Scalability</span></div>
      <div class="value">Bitcoin's transaction rate too slow for you? Plug another BTC Zone to Cosmos for an instant speed boost.</div>
    </li>
    <li @click="viewStep('#walkthrough-4')">
      <div class="key"><i class="material-icons">check</i><span>Upgradability</span></div>
      <div class="value">Hard forks are a thing of the past. Plug the upgraded Zone to Cosmos and invite your users over.</div>
    </li>
    <li @click="viewStep('#walkthrough-5')">
      <div class="key"><i class="material-icons">check</i><span>Decentralization</span></div>
      <div class="value">Your mission critical apps don't have have to rely on a single blockchain. Communicate with all of them on Cosmos. </div>
    </li>
  </ul>
</template>

<script>
import $ from 'jquery'

export default {
  methods: {
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

#cover-benefits
  display none
  flex-flow row wrap
  margin-bottom 1.5*x

  li
    list-style none
    flex 1 0 50%
    padding 0.5*x 0
    font-size x

    .key
      display flex
      align-items center

      i.material-icons
        font-size 1.25*x
        padding-right 0.333*x
      span
        text-decoration underline

    .value
      display none

    &:hover
      cursor pointer

@media screen and (min-width: 360px)
  #cover-benefits
    display flex

@media screen and (min-width: 768px)
  #cover-benefits
    max-width 60em
    margin 0 0 1.5*x

    li
      margin 0 0 3*x
      padding 0 1.5*x

      .key
        display block
        margin 0 0 0.5*x

        i.material-icons
          display none

        span
          text-decoration none
          font-size 1.25*x

      .value
        display block
@media screen and (min-width: 1024px)
  #cover-benefits
    li
      padding-left 0
      margin 0 0 1.5*x
@media screen and (min-width: 1200px)
  #cover-benefits
    li
      margin 0 0 2*x
</style>
