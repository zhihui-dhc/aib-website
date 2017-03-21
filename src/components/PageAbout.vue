<template>
  <page-split>
    <page-header
      :title="$t('siteAbout.title')"
      :subtitle="$t('siteAbout.subtitle')"
      slot="header"
      type="split">
    </page-header>
    <ni-section>
      <card-person v-for="person in teamMembers" :person="person"></card-person>
    </ni-section>
    <ni-section>
      <card-person v-for="person in advisors" :person="person"></card-person>
    </ni-section>
  </page-split>
</template>

<script>
import { mapGetters } from 'vuex'
import CardPerson from './CardPerson'
import NiSection from './NiSection'
import PageHeader from '@nylira/vue-page-header'
import PageSplit from '@nylira/vue-page-split'
export default {
  name: 'page-about',
  components: {
    CardPerson,
    NiSection,
    PageSplit,
    PageHeader
  },
  computed: {
    teamMembers () {
      return this.allPeople.filter(p => p.category === 'member')
    },
    advisors () {
      return this.allPeople.filter(p => p.category === 'advisor')
    },
    ...mapGetters(['allPeople'])
  },
  data () {
    return {
      metadata: {
        page: 'About',
        title: `About - ${this.$t('site.title')}`,
        desc: 'Information about the Cosmos team.'
      }
    }
  },
  head: {
    title () {
      return {
        inner: this.metadata.page,
        separator: '-',
        complement: this.$t('site.title')
      }
    },
    meta () {
      return [
        { n: 'description', c: this.metadata.desc },
        { n: 'twitter:title', c: this.metadata.title },
        { n: 'twitter:description', c: this.metadata.desc },
        { p: 'og:title', c: this.metadata.title },
        { p: 'og:description', c: this.metadata.desc }
      ]
    }
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

</style>
