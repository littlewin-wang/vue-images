<template>
  <div class="paginator">
    <div v-if="index > 0" class="arrow left" @click.stop="index -= 1">
      <icon :type="'arrowLeft'" :color="'#ccc'"></icon>
    </div>
    <div class="thumbnail-wrapper" v-for="item in activeImages" :key="item.index" @click.stop="setActive(item.index-1)">
      <thumbnail :imageUrl="item.imageUrl" :class="{active: item.isActive}" v-if="!isMove"></thumbnail>
    </div>
    <div v-if="index < (images.length - 5)" class="arrow right" @click.stop="index += 1">
      <icon :type="'arrowRight'" :color="'#ccc'"></icon>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import icon from './common/icon'
  import thumbnail from './common/thumbnail'

  export default {
    props: {
      images: Array,
      activeIndex: Number
    },
    data () {
      return {
        index: 0,
        isMove: false
      }
    },
    computed: {
      activeImages () {
        return this.images.slice(this.index, this.index + 5)
      }
    },
    mounted () {
      this.index = this.setIndex(this.activeIndex)
      this.setActive(this.activeIndex)
    },
    watch: {
      activeIndex () {
        this.index = this.setIndex(this.activeIndex)
        this.setActive(this.activeIndex)
      }
    },
    methods: {
      setIndex (idx) {
        if ((idx <= this.images.length - 3) && (idx >= 2)) {
          return idx - 2
        } else if (idx < 2) {
          return 0
        } else {
          return this.images.length - 5
        }
      },
      setActive (idx) {
        if (idx !== this.activeIndex) {
          this.$emit('changeIndex', idx)
        }
        this.isMove = true
        this.images.forEach((item) => {
          item.isActive = false
        })
        this.images[idx].isActive = true
        this.isMove = false
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
    width: 100%
    min-width: 300px
    position: absolute
    left: 0
    bottom: 10px
    text-align: center
    margin: 0 auto
    .arrow
      display: inline-block
      position: absolute
      vertical-align: top
      height: 20px
      width: 20px
      margin: 18px 10px 0 10px
      cursor: pointer
      &.left
        left: calc(50% - 170px)
      &.right
        right: calc(50% - 170px)
    .thumbnail-wrapper
      display: inline-block
</style>
