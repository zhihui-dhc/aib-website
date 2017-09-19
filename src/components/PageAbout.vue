<template>
  <page-split>
    <page-header
      :title="metadata.title"
      subtitle="The Tendermint team is currently working full time on bringing Cosmos to reality.<br><br><a href='https://tendermint.com/careers' target='_blank'>We are hiring!</a>"
      slot="header"
      type="split">
    </page-header>
    <ni-section>
      <div slot="title">Interchain Foundation Council</div>
      <card-person
        v-for="person in ppl('interchain')"
        :key="person.slug"
        :person="person">
      </card-person>
    </ni-section>
    <ni-section>
      <div slot="title">Tendermint Team</div>
      <card-person
        v-for="person in ppl('aib')"
        :key="person.slug"
        :person="person">
      </card-person>
    </ni-section>
    <ni-section>
      <div slot="title">Tendermint Advisors</div>
      <card-person
        v-for="person in ppl('advisors')"
        :key="person.slug"
        :person="person">
      </card-person>
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
    ...mapGetters(['allPeople'])
  },
  data () {
    return {
      metadata: {
        title: 'About',
        desc: 'Tendermint, Inc. is currently working full time on bringing Cosmos to reality. We are hiring!'
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
  },
  methods: {
    ppl (tag) { return this.allPeople.filter(p => p.tags.includes(tag)) }
  }
}
</script>
