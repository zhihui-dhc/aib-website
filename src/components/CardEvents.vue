<template>
  <ul class="clearfix card-event">
    <li v-for="item in events">
      <div class="content">
        <div>
          <div class="img-box">
            <img :src="'./static/events/'+item.img">
          </div>
        </div>
        <div class="title">{{item.title}}</div>
        <div class="date">{{item.date}}</div>
        <div class="details">{{item.details}}</div>
        <div class="href">
          <a :href="item.href" target="_blank">Visit event website -></a>
        </div>
      </div>
    </li>
  </ul>
</template>


<script>
  export default {
    name: 'card-events',
    props: ['events']
  }
</script>


<style lang="stylus">
@require '../styles/variables.styl'
.card-event
  .clearfix
    padding-bottom 20px

  .clearfix:after
    position relative
    content ''
    display: block
    width 0
    height 0
    visibility hidden
    clear both

  ul
    font-size 0

  li
    padding-top 18px
    list-style none
    display inline-block
    width 50%
    text-align left
    overflow hidden
    vertical-align top
    .content
      padding 1vh
      box-sizing border-box
      overflow hidden
    .img-box
      height 30vh
      overflow hidden
    .img-box img
      position relative
      width 100%
      top 50%
      transform translateY(-50%)
    .title
      padding-top 18px
      font-size 16px
      font-weight bold
      color txt
    .date
      color dim
      font-weight bold
      padding-top 2px
      font-size 16px
    .details
      font-size 16px
      font-weight normal
      padding-top 24px
      color light
    .href
      padding-top 24px
      font-size 16px

  @media screen  and (min-width: 768px) and (max-width: 1024px)
    .img-box
      height: 22vh !important

  @media screen  and (max-width: 768px)
    li
      width 100%
</style>
