<template>
  <div class="form-nav-progress">
    <button type="button" class="btn btn-small" :class="{ 'disabled': atMinimum }" @click="decrement">
      <i class="fa fa-angle-left"></i>
    </button>
    <button type="button" class="btn btn-small" :class="{ 'disabled': atMaximum }" @click="increment">
      <i class="fa fa-angle-right"></i>
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
  data () {
    return {
      min: 1,
      max: 4
    }
  },
  methods: {
    decrement (event) {
      if (this.step > this.min) {
        this.$emit('update', this.step - 1)
        event.target.blur()
      }
    },
    increment (event) {
      if (this.step < this.max) {
        this.$emit('update', this.step + 1)
        event.target.blur()
      }
    }
  },
  props: ['step']
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
