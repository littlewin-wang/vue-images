<template>
  <div class="thumbnail" :style="{ backgroundImage: 'url(' + imageUrl + ')' }"></div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      imageUrl: String
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .thumbnail
    display: inline-block
    margin: 2px
    width: 50px
    height: 50px
    border-radius: 2px
    background-position: center
    background-size: cover
    box-shadow: inset 0 0 0 1px hsla(0,0%,100%,.2)
    cursor: pointer
    overflow: hidden
    &.active
      box-shadow: inset 0 0 0 2px #fff
</style>
