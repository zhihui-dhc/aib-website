<template lang='pug'>
section.section-home-cover
  .section-container
    img(src="../assets/img/All_In_Bits.png")
    div.link
      a(href='https://cosmos.network/',target='_blank')
        img(style="margin-left: 12px;",src="../assets/img/cosmos.png")
      a(href='https://tendermint.com/',target='_blank')
        img(style="margin-left: 14px;",src="../assets/img/tindermint.png")
</template>

<script>
export default {
  name: 'SectionCover'
}
</script>

<style scoped lang="stylus">
@require '../styles/variables.styl'

.section-home-cover
  flex: 1;
  background-color: rebeccapurple;
  background: url(../assets/img/background.png) ;

  .section-container
    padding 2*x 1.5*x
    position relative
    z-index 5

    padding-top 16rem
    text-align center
    .link
      font-size 0
      margin-top: 1vh;
      img
        border 1px solid rgba(0,0,0,0)
        margin-right  10px
        transition border 1s;

      img:hover
        border 1px solid #44ffd1

@media screen and (max-width:1023px)
  .section-container
    padding-top 8rem !important
@media screen and (max-width:1023px)
  .section-container
    img
      width 400px
    .link
        img
          width 200px
@media screen and (max-width:667px)
  .section-container
    img
      width 260px
    .link
      img
        width 50%
        min-width 200px
</style>
