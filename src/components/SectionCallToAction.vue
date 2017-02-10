<template>
  <section class="section-call-to-action">
    <div class="section-container">
      <h2>{{ $t('sectionCallToAction.title') }}</h2>
      <div class="description">
        <p>{{ $t('sectionCallToAction.description') }}</p>
      </div>
      <form-email-signup></form-email-signup>
    </div>
  </section> 
</template>

<script>
import FormEmailSignup from './FormEmailSignup'
export default {
  name: 'section-call-to-action',
  components: {
    FormEmailSignup
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.section-call-to-action
  background c-app-fg

  .section-container
    max-width 25rem
    margin 0 auto

    text-align center
    padding 2rem

    h2
      font-size 1.5rem
      font-weight 500
      margin-bottom 0.5rem

    .description
      margin-bottom 1.5rem
      color light

    form
      margin-bottom 1rem
</style>
