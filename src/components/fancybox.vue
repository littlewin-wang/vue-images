<template>
  <div class="fancybox">
    <div class="image-wrapper">
      <div class="header">
        <div class="close">
          <icon :type="'close'" :color="'#ccc'"></icon>
        </div>
      </div>
      <img class="image" :src="mapInfo.imageUrl">
      <div class="footer">
        <span class="caption">{{ mapInfo.caption }}</span>
        <span class="count">{{ mapInfo.index }} of {{ mapInfo.total }}</span>
      </div>
    </div>
    <div v-if="mapInfo.index > 1" class="arrow left" @click="decIndex">
      <icon :type="'arrowLeft'" :color="'#ccc'"></icon>
    </div>
    <div v-if="mapInfo.index < mapInfo.total" class="arrow right" @click="addIndex">
      <icon :type="'arrowRight'" :color="'#ccc'"></icon>
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
            imageUrl: 'https://images.unsplash.com/photo-1452274381522-521513015433?dpr=2&auto=format&crop=faces&fit=crop&w=240&h=159',
            caption: 'Photo by Teddy Kelley',
            index: 2,
            total: 10
          }
        }
      }
    },
    methods: {
      decIndex () {
        this.$emit('decIndex')
      },
      addIndex () {
        this.$emit('addIndex')
      }
    },
    components: {
      icon
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .fancybox
    position: relative
    margin-bottom: 20px
    max-width: 1024px
    .image-wrapper
      width: 50%
      margin: 0 auto
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
        margin: 0 auto
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
    .arrow
      display: inline-block
      position: absolute
      top: 50%
      height: 50px
      width: 50px
      cursor: pointer
      &.left
        left: 0
      &.right
        right: 0
</style>
