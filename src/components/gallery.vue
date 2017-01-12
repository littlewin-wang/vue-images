<template>
  <div class="gallery">
    <div class="bigger">
      <img :src="images[0].imageUrl" @click="setActive(0)">
      <img :src="images[5].imageUrl" @click="setActive(5)">
    </div>
    <div class="smaller">
      <img :src="images[1].imageUrl" @click="setActive(1)">
      <img :src="images[2].imageUrl" @click="setActive(2)">
    </div>
    <div class="smaller">
      <img :src="images[3].imageUrl" @click="setActive(3)">
      <img :src="images[4].imageUrl" @click="setActive(4)">
      <img :src="images[9].imageUrl" @click="setActive(9)">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      images: Array
    },
    methods: {
      setActive (idx) {
        this.$emit('changeIndex', idx)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .gallery
    display: flex
    .bigger, .smaller
      flex: 1
      box-sizing: border-box
      padding: 2px 1px
      img
        display: block
        height: auto
        width: auto
        max-width: 100%
        border: 0px
        border-radius: 2px
        cursor: pointer
        overflow: hidden
    .bigger
      flex: 0 0 40%
    .smaller
      flex: 0 0 30%
      img
        padding-bottom: 2px
        &:last-child
          padding-bottom: 0
</style>
