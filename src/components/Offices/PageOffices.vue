<template>
  <page-split class="PageOffices">
    <page-header
      title="Offices"
      subtitle="Join us at Tendermint to build and improve <a href='https://cosmos.network'>Cosmos</a> and Tendermint.<br><br>Jobs here are constantly updated. If your specialty is unlisted, we encourage you to still apply."
      type="split"
      slot="header">
    </page-header>
    <card-offices :offices="allOffices">
    </card-offices>
  </page-split>
</template>


<script>
  import { mapGetters } from 'vuex'
  import CardOffices from './CardOffices'
  import NiSection from '../NiSection'
  import PageHeader from '@nylira/vue-page-header'
  import PageSplit from '@nylira/vue-page-split'

  export default {
    name: 'PageOffices',
    components: {
      NiSection,
      PageHeader,
      PageSplit,
      CardOffices
    },
    computed: {
      ...mapGetters(['allOffices'])
    },
    data () {
      return {
        metadata: {
          title: 'Offices',
          desc: 'All In Bits, Inc. has offices in San Francisco, Toronto, and Berlin.'
        }
      }
    },
    head: {
      title () {
        return {
          inner: this.metadata.title,
          separator: '-',
          complement: 'All In Bits, Inc.'
        }
      }
    }
  }
</script>

