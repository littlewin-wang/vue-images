<template>
  <div class="app">
    <paginator></paginator>
  </div>
</template>

<script type="text/ecmascript-6">
import icon from 'components/common/icon'
import paginator from 'components/paginator'

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
    paginator
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
