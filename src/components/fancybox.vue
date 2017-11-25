<template>
  <div class="fancybox">
    <div class="image-wrapper">
      <div class="header">
        <div class="play" @click.stop="play">
          <icon v-if="!isPlay" :type="'play'" :color="'#ccc'"></icon>
          <icon v-else :type="'pause'" :color="'#ccc'"></icon>
        </div>
        <div class="full" @click.stop="full">
          <icon v-if="!isFullScreen" :type="'full'" :color="'#ccc'"></icon>
          <icon v-else :type="'exitfull'" :color="'#ccc'"></icon>
        </div>
        <div class="close" @click.stop="close" v-show="showclosebutton">
          <icon :type="'close'" :color="'#ccc'"></icon>
        </div>
      </div>
      <transition-group style="white-space:nowrap" :mode="transition.mode" :enter-active-class="'animated ' + transition.enterClass" :leave-active-class="'animated ' + transition.leaveClass">
        <img ref="images" class="image lazyload" v-for="item in images" :key="item.index" :data-src="item.imageUrl" v-show="item.index===index+1 && !reset" @click.stop="addIndex">
      </transition-group>
      <div class="footer">
        <span class="caption" @click.stop v-show="showcaption" v-html="images[index].caption"></span>
        <span class="count" @click.stop v-show="showimagecount">{{ index+1 }} {{imagecountseparator}} {{ images[index].total }}</span>
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
      reset: Boolean,
      animate: {
        type: Boolean,
        default: false
      },
      showclosebutton: Boolean,
      showcaption: Boolean,
      imagecountseparator: String,
      showimagecount: Boolean
    },
    data () {
      return {
        next: true,
        animation: false,
        isFullScreen: document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen,
        isPlay: false
      }
    },
    created () {
      var that = this
      document.addEventListener('fullscreenchange', () => {
        that.isFullScreen = !that.isFullScreen
      })
      document.addEventListener('webkitfullscreenchange', () => {
        that.isFullScreen = !that.isFullScreen
      })
      document.addEventListener('mozfullscreenchange', () => {
        that.isFullScreen = !that.isFullScreen
      })
    },
    computed: {
      transition () {
        return {
          mode: '',
          enterClass: this.next ? 'slideInLeft' : 'slideInRight',
          leaveClass: this.next ? 'slideOutRight' : 'slideOutLeft'
        }
      }
    },
    methods: {
      decIndex () {
        if (this.timeout) {
          clearTimeout(this.timeout)
        } else {
          this.$emit('decIndex')
          this.next = true
          this.animation = true
        }

        this.timeout = setTimeout(() => {
          this.timeout = null
        }, 350)
      },
      addIndex () {
        if (this.index < this.images[this.index].total - 1) {
          if (this.timeout) {
            clearTimeout(this.timeout)
          } else {
            this.$emit('addIndex')
            this.next = false
            this.animation = true
          }

          this.timeout = setTimeout(() => {
            this.timeout = null
          }, 350)
        }
      },
      play () {
        this.next = false
        if (!this.isPlay) {
          this.animation = true
          this.$emit('play')
        } else {
          this.animation = false
          this.$emit('pause')
        }
        this.isPlay = !this.isPlay
      },
      full () {
        function launchFullscreen (element) {
          if (element.requestFullscreen) {
            element.requestFullscreen()
          } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen()
          } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen()
          } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen()
          }
        }

        function exitFullscreen () {
          if (document.exitFullscreen) {
            document.exitFullscreen()
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen()
          }
        }

        if (this.isFullScreen) {
          exitFullscreen()
        } else {
          launchFullscreen(document.documentElement)
        }
      },
      close () {
        this.isPlay = false
        this.$emit('pause')
        this.$emit('close')
        this.animation = false
      }
    },
    watch: {
      index () {
        this.$nextTick(() => {
          if (!this.isPlay) {
            this.animation = false
          }
        })
      },
      reset () {
        if (this.reset) {
          this.isPlay = false
          this.animation = false
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
        text-align: left
        .play, .full, .close
          display: inline-block
          width: 20px
          height: 20px
          cursor: pointer
        .play, .full
          margin-top: 10px
          margin-right: 10px
        .close
          position: absolute
          right: 0
          top: 10px
      .image
        vertical-align: middle
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
          a
            color: #fff
            &:hover
              color: #888
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
