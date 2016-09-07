<template>
  <div id="cover-alert">
    <form action="//network.us14.list-manage.com/subscribe/post?u=1b8aeaa81ca615914eb2eb7fc&amp;id=64c73f9f5f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate form-default" target="_blank" novalidate>
      <p><strong>You can make impactful decisions on the future of Cosmos.</strong> The crowd sale for Atom tokens is going live on October 17th.</p>
      <div class="input-group">
        <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="Email Address">
        <input type="submit" value="Alert Me" name="subscribe" id="mc-embedded-subscribe">
      </div>
      <!-- anti-bot signups-->
      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_1b8aeaa81ca615914eb2eb7fc_64c73f9f5f" tabindex="-1" value=""></div>
    </form>
  </div>
</template>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'

#cover-alert
  .form-default
    max-width 30em
    margin 0 auto

    background #fff
    border 1px solid bc
    padding x
    font-size 0.75*x

    p
      margin 0 0 x

    strong
      font-weight bold

    .input-group
      display flex

    input
      flex 3
      &[type="email"]
        margin-right 0.5*x
      &[type="submit"]
        flex 2

@media screen and (min-width: 400px)
  #cover-alert .form-default
    font-size 0.875*x

@media screen and (min-width: 768px)
  #cover-alert
    .form-default
      padding 2*x
      font-size x
      p
        margin 0 0 1.5*x
      input[type="email"]
        margin-right x

@media screen and (min-width: 1024px)
  #cover-alert
    flex 1
    margin-left 1.5*x
    height 100%

    display flex
    align-content center
    align-items center

    border-left 1px solid bc

    .form-default
      border none
      background transparent
      padding-right 0

      p
        border-bottom 1px solid bc
        padding-bottom 2*x
        margin 0 0 2*x

      strong
        margin 0 0 1.5*x
        display block

      .input-group
        flex-flow column

        input
          &[type="email"]
            margin 0 0 x
</style>
