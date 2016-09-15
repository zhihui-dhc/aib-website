<template>
  <div class="select-wrapper">
    <select id="{{ id }}" v-model="model" required>
      <option v-if="empty" value="" disabled selected hidden>Select&hellip;</option>
      <option v-for="option in options | orderBy 'text'" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    model: String,
    options: {
      type: Array,
      default () {
        return [
          { value: 'CN', text: 'China' },
          { value: 'JP', text: 'Japan' },
          { value: 'US', text: 'United States of America' }
        ]
      }
    },
    empty: Boolean
  }
}
</script>

<style lang="stylus" scoped>
@require '../../styles/variables.styl'

.select-wrapper
  border 1px solid ibc
  height 2rem

  position relative
  width 100%

  &:after
    display block
    box-sizing border-box
    width 2rem
    height 2rem

    position absolute
    top -1px
    right -1px

    border 1px solid ibc
    background subtle-gradient

    font-family 'Material Icons'
    content "arrow_drop_down"
    text-align center
    line-height x*2 - 2px
    color dim

    pointer-events none

  select
    appearance none
    width 100%
    padding 0 0.5rem

    background #fff
    border none
    border-radius 0

    df()
    line-height 2*x - 2px
    height 2*x - 2px
</style>
