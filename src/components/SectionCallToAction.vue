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
  border-top dbd

  .section-container
    max-width 480px
    margin 0 auto

    text-align center
    padding 3rem 1.5rem

    h2
      font-size 1.5rem
      margin 0 0 1rem
      letter-spacing 0.01em
    .description
      margin 0 0 1.5rem

    form
      margin-bottom 1rem

@media screen and (min-width:720px)
  .section-call-to-action
    .section-container
      h2
        font-size 2em
</style>
