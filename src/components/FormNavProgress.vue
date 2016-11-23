<template>
  <div class="form-nav-progress">
    <button type="button" class="btn btn-small" v-bind:class="{ 'disabled': atMinimum }" @click="decrement">
      <i class="material-icons">chevron_left</i>
    </button>
    <button type="button" class="btn btn-small" v-bind:class="{ 'disabled': atMaximum }" @click="increment">
      <i class="material-icons">chevron_right</i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'form-nav-progress',
  computed: {
    atMinimum () {
      if (this.step <= this.min) {
        return true
      }
      return false
    },
    atMaximum () {
      if (this.step >= this.max) {
        return true
      }
      return false
    }
  },
  methods: {
    decrement (event) {
      if (this.step > this.min) {
        this.step -= 1
        event.target.blur()
      }
    },
    increment (event) {
      if (this.step < this.max) {
        this.step += 1
        event.target.blur()
      }
    }
  },
  props: ['step', 'min', 'max']
}
</script>


<style lang="stylus">
@import '../styles/variables.styl'

.form-nav-progress
  display flex

  .btn
    display block
    padding-left 0.5rem
    padding-right 0.5rem
    &:first-of-type
      border-right none
</style>

