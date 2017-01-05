<template>
  <div v-html="icon"></div>
</template>

<script type="text/ecmascript-6">
  import icons from 'assets/icons'

  export default {
    props: {
      type: String,
      color: String
    },
    computed: {
      icon () {
        if (!icons[this.type]) {
          console.log('Icon render error -- type not exist')
          return ''
        }
        return icons[this.type].default(this.color)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
