<template>
  <form action="//network.us14.list-manage.com/subscribe/post?u=1b8aeaa81ca615914eb2eb7fc&amp;id=64c73f9f5f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>

    <div class="mc-field-group">
      <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="Email Address">
    </div>

    <div class="mc-field-group">
      <input type="submit" value="Alert Me" name="subscribe" id="mc-embedded-subscribe">
    </div>

    <div id="mce-responses" class="clear">
      <div class="response" id="mce-error-response" style="display:none"></div>
      <div class="response" id="mce-success-response" style="display:none"></div>
    </div>

    <!-- anti-bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_1b8aeaa81ca615914eb2eb7fc_64c73f9f5f" tabindex="-1" value=""></div>
  </form>
</template>

<script>
</script>


<style lang="stylus" scoped>
@import '../../styles/variables.styl'

form
  display flex
  flex-flow row

  max-width 320px
  margin x auto 0.25*x

  .mc-field-group
    input
      -webkit-appearance none
      background #fff
      border-radius 0
      padding 0 0.5*x
      margin 0
      height 2*x

      df()
      line-height 2*x - 2px

      &[type="email"]
        border 1px solid bc
        flex 2
        margin-right 0.5*x

      &[type="submit"]
        border none
        flex 1
        padding 0 x
        background lighten(mcolor, 25%)
        color #fff
        line-height 2*x - 4px
        height 2*x - 4px
        box-shadow mcolor 0 4px 0
</style>
