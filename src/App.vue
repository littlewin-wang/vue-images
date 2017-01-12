<template>
  <div class="app">
    <gallery v-show="!isShow" :images="images" @changeIndex="changeImg($event)"></gallery>
    <div class="lightbox " v-show="isShow">
      <fancybox :mapInfo="images[index]" @close="closeImg" @addIndex="nextImg" @decIndex="prevImg"></fancybox>
      <paginator :images="images" :activeIndex="index" @changeIndex="changeImg($event)"></paginator>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import gallery from 'components/gallery'
  import fancybox from 'components/fancybox'
  import paginator from 'components/paginator'

  export default {
    name: 'app',
    data () {
      return {
        isShow: false,
        index: 2,
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
      }
    },
    methods: {
      openImg () {
        this.isShow = true
        window.addEventListener('keydown', this.keyFun)
      },
      closeImg () {
        this.isShow = false
        window.removeEventListener('keydown', this.keyFun)
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
        switch (event.keyCode) {
          case 27:
            this.closeImg()
            break
          case 37:
            this.prevImg()
            break
          case 39:
            this.nextImg()
            break
          default:
            return
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
