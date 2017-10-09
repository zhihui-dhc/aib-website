<template>
  <div class="card-offices">
    <div class="flexlist" v-for="item in offices">
      <div class="img-box">
        <img :src="'./static/offices/'+item.img">
      </div>
      <div class="text">
        <div class="title">{{item.title}}</div>
        <div class="subTitle">{{item.subTitle}}</div>
        <div class="address">{{item.address}}</div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'card-offices',
    props: ['offices']
  }
</script>

<style lang="stylus">
  @require '../../styles/variables.styl'
  .card-offices
    margin-left 20vw
    overflow hidden
    margin-top 8vh
    .flexlist
      margin-bottom 8vh
      width 100%
      overflow hidden
      .img-box
        float left
        width 110px
      .text
        width: 290px;
        float left
        margin-left 2vw
        .title
          font-size 20px;
          font-weight bold;
          color txt;
        .subTitle
          color dim;
          font-weight bold;
          padding-top 24px;
          font-size 16px;
        .address
          padding-top 2px;
          font-size 16px;
          font-weight normal;
          color light;

  @media screen  and (max-width: 768px)
    .card-offices
      margin-left 8vw
      margin-top 2vh
    .flexlist
      margin-top 4vh !important
      .text
        .subTitle
          padding-top 2px !important
</style>
