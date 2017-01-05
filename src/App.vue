<template>
  <icon :type="type" :color="color"></icon>
</template>

<script type="text/ecmascript-6">
import icon from './components/icon'

export default {
  name: 'app',
  data () {
    return {
      type: 'close',
      color: 'yellow'
    }
  },
  components: {
    icon
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
