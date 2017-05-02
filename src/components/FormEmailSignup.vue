<template>
  <form action="//network.us14.list-manage.com/subscribe/post?u=1b8aeaa81ca615914eb2eb7fc&amp;id=64c73f9f5f" method="post" name="mc-embedded-subscribe-form" class="form-email-signup validate form" target="_blank" novalidate>

    <field
      id="mce-EMAIL"
      name="EMAIL"
      type="email"
      size="lg"
      placeholder="name@email.com">
    </field>
    <btn
      type="submit"
      value="Subscribe"
      size="lg"
      id="mc-embedded-subscribe">
    </btn>

    <!-- anti-bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_1b8aeaa81ca615914eb2eb7fc_64c73f9f5f" tabindex="-1" value=""></div>
  </form>
</template>

<script>
import Btn from '@nylira/vue-button'
import Field from '@nylira/vue-input'
export default {
  components: {
    Btn,
    Field
  }
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'
.form-email-signup
  display flex
  width 100%
  .ni-btn-wrapper
    width 10rem
  .ni-btn-wrapper .ni-btn
    border-left none

</style>

