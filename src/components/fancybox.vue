<template>
  <div class="fancybox">
    <div class="header">
      <div class="close">
        <icon :type="'close'" :color="'#ccc'"></icon>
      </div>
    </div>
    <img class="image" :src="mapInfo.imgUrl">
    <div class="footer">
      <span class="caption">{{ mapInfo.caption }}</span>
      <span class="count">{{ mapInfo.index }} of {{ mapInfo.total }}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import icon from './common/icon'

  export default {
    props: {
      mapInfo: {
        type: Object,
        default: () => {
          return {
            caption: 'Photo by Teddy Kelley',
            imgUrl: 'https://images.unsplash.com/photo-1452274381522-521513015433?dpr=2&auto=format&crop=faces&fit=crop&w=240&h=159',
            index: 2,
            total: 10
          }
        }
      }
    },
    components: {
      icon
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .fancybox
    width: 50%
    margin: 0 auto
    margin-bottom: 20px
    max-width: 1024px
    .header
      height: 40px
      position: relative
      .close
        width: 20px
        height: 20px
        position: absolute
        right: 0
        top: 10px
        cursor: pointer
    .image
      display: block
      width: 100%
      cursor: pointer
    .footer
      position: relative
      padding: 5px
      span
        display: inline-block
        font-size: 14px
        color: #fff
      .count
        position: absolute
        right: 0
</style>
