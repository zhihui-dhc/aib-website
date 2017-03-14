<template>
  <page-split class="page-team">
    <page-header
      :title="$t('siteTeam.title')"
      :subtitle="$t('siteTeam.subtitle')"
      type="split">
    </page-header>
    <div class="page-content">
      <locale-menu path="team" :langs="['en-US', 'ko']"></locale-menu>
      <section class="section-default section-team-portraits">
        <div class="section-container">
          <div class="section-content">
            <h1>Interchain Foundation</h1>
            <card-person v-for="person in teamMembers" :person="person"></card-person>
          </div>
        </div>
      </section>

      <section class="section-default section-portraits">
        <div class="section-container">
          <div class="section-content">
            <h1>Advisors</h1>
            <card-person v-for="person in advisors" :person="person"></card-person>
          </div>
        </div>
      </section>
      </div>
    </div>
  </page-split>
</template>

<script>
import LocaleMenu from './LocaleMenu'
import { mapGetters } from 'vuex'
import ArticleBody from '@nylira/vue-article-body'
import CardPerson from './CardPerson'
import PageHeader from '@nylira/vue-page-header'
import PageSplit from '@nylira/vue-page-split'
export default {
  name: 'page-team',
  components: {
    LocaleMenu,
    ArticleBody,
    CardPerson,
    PageSplit,
    PageHeader
  },
  computed: {
    teamMembers () {
      return this.people.filter(p => p.category === 'member')
    },
    advisors () {
      return this.people.filter(p => p.category === 'advisor')
    },
    ...mapGetters({
      people: 'allPeople'
    })

  },
  data () {
    return {
      metadata: {
        page: 'Team',
        title: `Team - ${this.$t('site.title')}`,
        desc: 'Information about the Cosmos Team.'
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
.page-team
  padding-top 1rem
</style>
