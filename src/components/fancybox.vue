<template>
  <div class="fancybox">
    <div class="image-wrapper">
      <div class="header">
        <div class="close" @click.stop="close">
          <icon :type="'close'" :color="'#ccc'"></icon>
        </div>
      </div>
      <img ref="images" class="image animated" v-for="item in images" :src="item.imageUrl" v-show="item.index===index+1" @click.stop="addIndex">
      <div class="footer">
        <span class="caption" @click.stop="">{{ images[index].caption }}</span>
        <span class="count" @click.stop="">{{ index+1 }} of {{ images[index].total }}</span>
      </div>
    </div>
    <div v-if="index > 0" class="arrow left" @click.stop="decIndex">
      <icon :type="'arrowLeft'" :color="'#ccc'"></icon>
    </div>
    <div v-if="index < images[index].total-1" class="arrow right" @click.stop="addIndex">
      <icon :type="'arrowRight'" :color="'#ccc'"></icon>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import icon from './common/icon'

  export default {
    props: {
      index: Number,
      images: Array,
      animate: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        next: true,
        animation: false
      }
    },
    methods: {
      decIndex () {
        this.$refs.images[this.index].classList.add('slideOutRight')
        var that = this
        window.setTimeout(() => {
          that.$emit('decIndex')
          that.next = true
          that.animation = true
        }, 350)
      },
      addIndex () {
        if (this.index < this.images[this.index].total - 1) {
          this.$refs.images[this.index].classList.add('slideOutLeft')
          var that = this
          window.setTimeout(() => {
            that.$emit('addIndex')
            that.next = false
            that.animation = true
          }, 350)
        }
      },
      close () {
        this.$emit('close')
        this.animation = false
      }
    },
    watch: {
      index () {
        this.$refs.images[this.index].classList.remove('slideInLeft', 'slideInRight', 'slideOutLeft', 'slideOutRight')
        let action = this.next ? 'slideInLeft' : 'slideInRight'
        if (this.animation || this.animate) {
          this.$refs.images[this.index].classList.add(action)
        }
        this.$nextTick(() => {
          this.animation = false
        })
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
      position: relative
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
        max-height: calc(100vh - 180px)
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
      @media screen and (min-width:720px)
        height: 40px
        width: 40px
        top: calc(50% - 8px)
      @media screen and (max-width:720px)
        height: 20px
        width: 20px
        top: calc(50% + 12px)
      cursor: pointer
      &.left
        left: 0
      &.right
        right: 0
</style>
