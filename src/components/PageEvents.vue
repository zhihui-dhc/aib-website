<template>
  <div class="page-events">
      <card-events :events="allEvent">
      </card-events>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardEvents from './CardEvents'

export default {
  name: 'page-events',
  components: {
    CardEvents
  },
  computed: {
    ...mapGetters(['allEvent'])
  },
  data () {
    return {
      metadata: {
        title: 'event',
        desc: 'event'
      }
    }
  },
  head: {
    title () {
      return {
        inner: this.metadata.title,
        separator: '-',
        complement: 'Cosmos - Internet of Blockchains'
      }
    }
  }
}
</script>
<style lang="stylus">
  .page-events
    max-width  1242px
    margin auto
</style>
