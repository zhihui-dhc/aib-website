<template >
  <div class="footer">
    <div class="footer_center">
        Copyright 2017 All In Bits, Inc.
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-footer'
}
</script>

<style scoped lang="stylus">
  @require '../styles/variables.styl'
  .footer
    box-shadow: 0 -1px 0 0 rgba(0,0,0,0.1);
    height: 40px;
    text-align: center;
    background-color: #fff;
    .footer_center
      max-width: 1024px;
      margin: 0 auto;
      font-size: 14px;
      line-height: 40px

</style>
