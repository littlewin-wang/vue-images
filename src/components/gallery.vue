<template>
  <div class="gallery">
    <div class="wrapper" v-for="(item, index) in images">
      <img :data-src="item.imageUrl" class="lazyload" @click="setActive(index)">
      <span v-if="deletebtn" @click="deleteImage(item.id)">{{ deletebtn }}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      images: Array,
      deletebtn: String
    },
    methods: {
      setActive (idx) {
        this.$emit('changeIndex', idx)
      },

      deleteImage (imageId) {
        this.$emit('deleteImage', imageId)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .gallery
    display: flex
    flex-wrap: wrap
    .wrapper
      flex: 1
      box-sizing: border-box
      padding: 2px 1px
      img
        display: block
        height: 100px
        width: auto
        border: 0px
        border-radius: 2px
        cursor: pointer
        overflow: hidden
</style>
