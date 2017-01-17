<template>
  <div class="app">
    <gallery :images="images" @changeIndex="changeImg($event)"></gallery>
    <div ref="lightbox" class="lightbox" v-show="isShow" @click="closeImg">
      <fancybox ref="fancybox" :images="images" :index="index" @close="closeImg" @addIndex="nextImg" @decIndex="prevImg"></fancybox>
      <paginator :images="images" :activeIndex="index" @changeIndex="changeImg($event)"></paginator>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import gallery from 'components/gallery'
  import fancybox from 'components/fancybox'
  import paginator from 'components/paginator'

  export default {
    name: 'lightbox',
    data () {
      return {
        isShow: false,
        index: 2,
        touchPoint: {
          prev: 0,
          now: 0
        },
        images: [
          {
            imageUrl: 'https://images.unsplash.com/photo-1454991727061-be514eae86f7?dpr=2&auto=format&w=1024',
            caption: 'Photo by 1',
            index: 1,
            total: 10,
            isActive: false
          },
          {
            imageUrl: 'https://images.unsplash.com/photo-1455717974081-0436a066bb96?dpr=2&auto=format&w=1024',
            caption: 'Photo by 2',
            index: 2,
            total: 10,
            isActive: false
          },
          {
            imageUrl: 'https://images.unsplash.com/photo-1460899960812-f6ee1ecaf117?dpr=2&auto=format&w=1024',
            caption: 'Photo by 3',
            index: 3,
            total: 10,
            isActive: false
          },
          {
            imageUrl: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?dpr=2&auto=format&w=1024',
            caption: 'Photo by 4',
            index: 4,
            total: 10,
            isActive: false
          },
          {
            imageUrl: 'https://images.unsplash.com/photo-1452274381522-521513015433?dpr=2&auto=format&w=1024',
            caption: 'Photo by 5',
            index: 5,
            total: 10,
            isActive: false
          },
          {
            imageUrl: 'https://images.unsplash.com/photo-1471145653077-54c6f0aae511?dpr=2&auto=format&w=1024',
            caption: 'Photo by 6',
            index: 6,
            total: 10,
            isActive: false
          },
          {
            imageUrl: 'https://images.unsplash.com/photo-1471005197911-88e9d4a7834d?dpr=2&auto=format&w=1024',
            caption: 'Photo by 7',
            index: 7,
            total: 10,
            isActive: false
          },
          {
            imageUrl: 'https://images.unsplash.com/photo-1470583190240-bd6bbde8a569?dpr=2&auto=format&w=1024',
            caption: 'Photo by 8',
            index: 8,
            total: 10,
            isActive: false
          },
          {
            imageUrl: 'https://images.unsplash.com/photo-1470688090067-6d429c0b2600?dpr=2&auto=format&w=1024',
            caption: 'Photo by 9',
            index: 9,
            total: 10,
            isActive: false
          },
          {
            imageUrl: 'https://images.unsplash.com/photo-1470742292565-de43c4b02b57?dpr=2&auto=format&w=1024',
            caption: 'Photo by 10',
            index: 10,
            total: 10,
            isActive: false
          }
        ]
      }
    },
    created () {
      if (this.isShow) {
        window.addEventListener('keydown', this.keyFun)
        window.addEventListener('mousewheel', this.wheelFun)
        this.$refs.lightbox.addEventListener('touchstart', this.touchFun)
      }
    },
    methods: {
      openImg () {
        this.isShow = true
      },
      closeImg () {
        this.isShow = false
      },
      nextImg () {
        if (this.index < this.images.length - 1) {
          this.index++
        }
      },
      prevImg () {
        if (this.index > 0) {
          this.index--
        }
      },
      changeImg (event) {
        this.isShow = true
        this.index = event
      },
      keyFun (event) {
        var that = this
        switch (event.keyCode) {
          case 27:
            this.closeImg()
            break
          case 37:
            if (this.index > 0) {
              this.$refs.fancybox.$refs.images[this.index].classList.add('slideOutRight')
              window.setTimeout(() => {
                that.$refs.fancybox._data.next = true
                that.$refs.fancybox._data.animation = true
                that.prevImg()
              }, 375)
            }
            break
          case 39:
            if (this.index < this.images[this.index].total - 1) {
              this.$refs.fancybox.$refs.images[this.index].classList.add('slideOutLeft')
              window.setTimeout(() => {
                that.$refs.fancybox._data.next = false
                that.$refs.fancybox._data.animation = true
                that.nextImg()
              }, 375)
            }
            break
          default:
            return
        }
      },
      wheelFun (event) {
        var that = this
        if (event.deltaY > 0) {
          if (this.index < this.images[this.index].total - 1) {
            this.$refs.fancybox.$refs.images[this.index].classList.add('slideOutLeft')
            window.setTimeout(() => {
              that.$refs.fancybox._data.next = false
              that.$refs.fancybox._data.animation = true
              that.nextImg()
            }, 375)
          }
        } else {
          if (this.index > 0) {
            this.$refs.fancybox.$refs.images[this.index].classList.add('slideOutRight')
            window.setTimeout(() => {
              that.$refs.fancybox._data.next = true
              that.$refs.fancybox._data.animation = true
              that.prevImg()
            }, 375)
          }
        }
      },
      touchFun (event) {
        this.touchPoint.prev = event.touches[0].clientX
      },
      endFun (event) {
        this.touchPoint.now = event.changedTouches[0].clientX
        var that = this
        if (this.touchPoint.prev > this.touchPoint.now + 50) {
          if (this.index < this.images[this.index].total - 1) {
            this.$refs.fancybox.$refs.images[this.index].classList.add('slideOutLeft')
            window.setTimeout(() => {
              that.$refs.fancybox._data.next = false
              that.$refs.fancybox._data.animation = true
              that.nextImg()
            }, 375)
          }
        } else if (this.touchPoint.now > this.touchPoint.prev + 50) {
          if (this.index > 0) {
            this.$refs.fancybox.$refs.images[this.index].classList.add('slideOutRight')
            window.setTimeout(() => {
              that.$refs.fancybox._data.next = true
              that.$refs.fancybox._data.animation = true
              that.prevImg()
            }, 375)
          }
        }
      }
    },
    watch: {
      isShow () {
        if (this.isShow) {
          window.addEventListener('keydown', this.keyFun)
          window.addEventListener('mousewheel', this.wheelFun)
          this.$refs.lightbox.addEventListener('touchstart', this.touchFun)
          this.$refs.lightbox.addEventListener('touchend', this.endFun)
        } else {
          window.removeEventListener('keydown', this.keyFun)
          window.removeEventListener('mousewheel', this.wheelFun)
          this.$refs.lightbox.removeEventListener('touchstart', this.touchFun)
          this.$refs.lightbox.removeEventListener('touchend', this.endFun)
        }
      }
    },
    components: {
      gallery,
      fancybox,
      paginator
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .lightbox
    position: fixed
    top: 0
    width: 100%
    height: 100%
    padding: 2px
    background: rgba(0, 0, 0, 0.8)
    box-sizing: border-box
    font-size: 0
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif
</style>
