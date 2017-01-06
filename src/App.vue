<template>
  <div class="app">
    <fancybox></fancybox>
    <paginator></paginator>
  </div>
</template>

<script type="text/ecmascript-6">
  import fancybox from 'components/fancybox'
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
      fancybox,
      paginator
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width: 100%
    height: 100%
    background: #000
    font-size: 0
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif
    .icon-x
      width: 20px
</style>
