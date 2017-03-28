<template>
  <menu class="menu-popup menu-fundraiser" v-if="activeMenuUser" @click="toggleMenuFundraiser">
    <div class="container">
      <nav class="nav-user">
        <a id="nav-fundraiser" class="live" v-if="fundraiseStarted"
          :href="config.SALE_URL">
          Fundraiser <span>Live</span>
        </a>
        <a id="nav-fundraiser" class="soon" v-else>
          Fundraiser
          <span class="soon"><time-left :date="localStartDate"></time-left></span>
        </a>
        <span class="desc" v-if="fundraiseStarted">
          The Cosmos fundraiser will begin on <a href="https://www.worldtimebuddy.com/?qm=1&lid=5391959,2657908,2643743,1835848&h=5391959&date=2017-3-31&sln=6-7">{{ pdtStartDateFmt }}</a>. Check back soon!
        </span>
        <span class="desc" v-if="fundraiseStarted">
          The Cosmos fundraiser will be live until <a href="https://www.worldtimebuddy.com/?qm=1&lid=5391959,2657908,2643743,1835848&h=5391959&date=2017-3-31&sln=6-7">{{ pdtEndDate }}</a>. Check back soon!
        </span>

        <a href="http://slack.cosmos.network">
           Discuss on <i class="fa fa-slack"></i> Slack
        </a>
      </nav>
    </div>
  </menu>
</template>

<script>
import TimeLeft from './TimeLeft'
</script>
