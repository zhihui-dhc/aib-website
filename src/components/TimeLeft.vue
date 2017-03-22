<template>
  <div class="ni-time-left" :title="date" v-if="days > 1">
    {{ days }} days
  </div>
  <div class="ni-time-left" :title="date" v-else-if="hours > 1">
    {{ hours }} hours
  </div>
  <div class="ni-time-left" :title="date" v-else-if="minutes > 1">
    {{ minutes }} minutes
  </div>
  <div class="ni-time-left" :title="date" v-else-if="seconds > 1">
    {{ seconds }} seconds
  </div>
  <div class="ni-time-left" :title="date" v-else>
    has ended
  </div>
</template>

<script>
export default {
  name: 'ni-time-left',
  computed: {
    usableDate () {
      return Math.trunc(Date.parse(this.date) / 1000)
    },
    seconds () {
      return (this.usableDate - this.now) % 60
    },
    minutes () {
      return Math.trunc((this.usableDate - this.now) / 60) % 60
    },
    hours () {
      return Math.trunc((this.usableDate - this.now) / 60 / 60) % 24
    },
    days () {
      return Math.trunc((this.usableDate - this.now) / 60 / 60 / 24)
    }
  },
  data () {
    return {
      now: Math.trunc((new Date()).getTime() / 1000)
    }
  },
  mounted () {
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000)
    }, 1000)
  },
  props: ['date']
}
</script>
