<template>
  <div class="paginator">
    <div v-if="index > 0" class="arrow left" @click="index -= 1">
      <icon :type="'arrowLeft'" :color="'#ccc'"></icon>
    </div>
    <div class="thumbnail-wrapper" v-for="item in activeImages" @click="setActive($event)">
      <thumbnail :imageUrl="item.imageUrl" ref="thumbnail"></thumbnail>
    </div>
    <div v-if="index < (images.length - 5)" class="arrow right" @click="index += 1">
      <icon :type="'arrowRight'" :color="'#ccc'"></icon>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import icon from './common/icon'
  import thumbnail from './common/thumbnail'

  export default {
    data () {
      return {
        index: 4,
        images: [
          {
            imageUrl: 'https://images.unsplash.com/photo-1454991727061-be514eae86f7?dpr=2&auto=format&crop=faces&fit=crop&w=240&h=159'
          },
          {
            imageUrl: 'https://images.unsplash.com/photo-1455717974081-0436a066bb96?dpr=2&auto=format&crop=faces&fit=crop&w=240&h=159'
          },
          {
            imageUrl: 'https://images.unsplash.com/photo-1460899960812-f6ee1ecaf117?dpr=2&auto=format&crop=faces&fit=crop&w=240&h=159'
          },
          {
            imageUrl: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?dpr=2&auto=format&crop=faces&fit=crop&w=240&h=159'
          },
          {
            imageUrl: 'https://images.unsplash.com/photo-1452274381522-521513015433?dpr=2&auto=format&crop=faces&fit=crop&w=240&h=159'
          },
          {
            imageUrl: 'https://images.unsplash.com/photo-1471145653077-54c6f0aae511?dpr=2&auto=format&crop=faces&fit=crop&w=240&h=159'
          },
          {
            imageUrl: 'https://images.unsplash.com/photo-1471005197911-88e9d4a7834d?dpr=2&auto=format&crop=faces&fit=crop&w=240&h=159'
          },
          {
            imageUrl: 'https://images.unsplash.com/photo-1470583190240-bd6bbde8a569?dpr=2&auto=format&crop=faces&fit=crop&w=240&h=159'
          },
          {
            imageUrl: 'https://images.unsplash.com/photo-1470688090067-6d429c0b2600?dpr=2&auto=format&crop=faces&fit=crop&w=240&h=159'
          },
          {
            imageUrl: 'https://images.unsplash.com/photo-1470688090067-6d429c0b2600?dpr=2&auto=format&crop=faces&fit=crop&w=240&h=159'
          }
        ]
      }
    },
    computed: {
      activeImages () {
        return this.images.slice(this.index, this.index + 5)
      }
    },
    methods: {
      addIndex () {
        console.log(1)
        this.index++
      },
      setActive (e) {
        if (e.target) {
          this.$refs.thumbnail.forEach((item) => {
            item.$el.classList.remove('active')
          })
          e.target.classList.add('active')
        }
      }
    },
    components: {
      icon,
      thumbnail
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .paginator
    width: 360px
    position: relative
    text-align: center
    .arrow
      display: inline-block
      position: absolute
      vertical-align: top
      height: 20px
      width: 20px
      margin: 18px 10px 0 10px
      cursor: pointer
      &.left
        left: 0
      &.right
        right: 0
    .thumbnail-wrapper
      display: inline-block
</style>
