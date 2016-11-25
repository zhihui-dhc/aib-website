<template>
  <form action="//network.us14.list-manage.com/subscribe/post?u=1b8aeaa81ca615914eb2eb7fc&amp;id=64c73f9f5f" method="post" name="mc-embedded-subscribe-form" class="form-email-signup validate form-default" target="_blank" novalidate>

    <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" :placeholder="$t('emailSignupForm.emailAddress')">

    <input type="submit" class="btn" :value="$t('emailSignupForm.notifyMe')" name="subscribe" id="mc-embedded-subscribe">

    <!-- anti-bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_1b8aeaa81ca615914eb2eb7fc_64c73f9f5f" tabindex="-1" value=""></div>
  </form>
</template>

<style lang="stylus">
@import '../styles/variables.styl'

.form-email-signup
  max-width 40rem
  padding 0 1rem

  input, .btn
    display block
    width 100%

  input[type="email"]
    margin 0 0 0.5rem
</style>
