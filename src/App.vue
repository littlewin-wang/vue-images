<template>
  <div class="app">
    <icon :type="type" :color="color" class="icon-x"></icon>
    <thumbnail :imageUrl="imageUrl"></thumbnail>
    <thumbnail :imageUrl="imageUrl"></thumbnail>
    <thumbnail :imageUrl="imageUrl"></thumbnail>
  </div>
</template>

<script type="text/ecmascript-6">
import icon from './components/icon'
import thumbnail from './components/thumbnail'

export default {
  name: 'app',
  data () {
    return {
      type: 'arrowRight',
      color: '#22aa11',
      imageUrl: 'https://images.unsplash.com/photo-1460899960812-f6ee1ecaf117?dpr=2&auto=format&crop=faces&fit=crop&w=240&h=159'
    }
  },
  components: {
    icon,
    thumbnail
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    font-size: 0
    background: #000
    .icon-x
      width: 20px
</style>
