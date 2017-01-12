<template>
  <div class="fancybox">
    <div class="image-wrapper">
      <div class="header">
        <div class="close" @click.stop="close">
          <icon :type="'close'" :color="'#ccc'"></icon>
        </div>
      </div>
        <img ref="image" class="image" :src="mapInfo.imageUrl" @click.stop="addIndex">
      <div class="footer">
        <span class="caption" @click.stop="">{{ mapInfo.caption }}</span>
        <span class="count" @click.stop="">{{ mapInfo.index }} of {{ mapInfo.total }}</span>
      </div>
    </div>
    <div v-if="mapInfo.index > 1" class="arrow left" @click.stop="decIndex">
      <icon :type="'arrowLeft'" :color="'#ccc'"></icon>
    </div>
    <div v-if="mapInfo.index < mapInfo.total" class="arrow right" @click.stop="addIndex">
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
    data () {
      return {
        direction: 'fadeInRight'
      }
    },
    methods: {
      decIndex () {
        this.$emit('decIndex')
        this.direction = 'fadeInLeft'
      },
      addIndex () {
        this.$emit('addIndex')
        this.direction = 'fadeInRight'
      },
      close () {
        this.$emit('close')
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
    display: flex
    height: calc(100% - 80px)
    text-align: center
    align-items: center
    .image-wrapper
      display: inline-block
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
        max-height: calc(100vh - 160px)
        min-height: 200px
        @media screen and (min-width:720px)
          max-width: calc(85vw)
        @media screen and (max-width:720px)
          max-width: calc(98vw)
        margin: 0 auto
        cursor: pointer
        user-select: none
      .footer
        position: relative
        padding: 5px
        text-align: left
        span
          display: inline-block
          font-size: 14px
          color: #fff
        .count
          position: absolute
          font-size: 12px
          right: 0
    .arrow
      display: inline-block
      position: absolute
      top: calc(50vh - 25px)
      @media screen and (min-width:720px)
        height: 40px
        width: 40px
      @media screen and (max-width:720px)
        height: 25px
        width: 25px
      cursor: pointer
      &.left
        left: 0
      &.right
        right: 0
</style>
