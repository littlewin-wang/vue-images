new Vue({
  el: '#demo',
  data () {
    return {
      images: [
        {
          imageUrl: 'https://static.littlewin.wang/blog/1-thumb.png',
          caption: '<a href="#">Photo by 1</a>'
        },
        {
          imageUrl: 'https://static.littlewin.wang/blog/2-thumb.png',
          caption: 'Photo by 2'
        },
        {
          imageUrl: 'https://static.littlewin.wang/blog/3-thumb.jpeg',
          caption: 'Photo by 3'
        },
        {
          imageUrl: 'https://static.littlewin.wang/blog/4-thumb.png',
          caption: 'Photo by 4'
        },
        {
          imageUrl: 'https://static.littlewin.wang/blog/5-thumb.png',
          caption: 'Photo by 5'
        },
        {
          imageUrl: 'https://static.littlewin.wang/blog/6-thumb.jpeg',
          caption: 'Photo by 6'
        },
        {
          imageUrl: 'https://static.littlewin.wang/blog/7-thumb.jpg',
          caption: 'Photo by 7'
        },
        {
          imageUrl: 'https://static.littlewin.wang/blog/8-thumb.png',
          caption: 'Photo by 8'
        },
        {
          imageUrl: 'https://static.littlewin.wang/blog/9-thumb.png',
          caption: 'Photo by 9'
        },
        {
          imageUrl: 'https://static.littlewin.wang/blog/10-thumb.png',
          caption: 'Photo by 10'
        }
      ],
      modalclose: true,
      keyinput: true,
      mousescroll: true,
      showclosebutton: true,
      showcaption: true,
      imagecountseparator: 'of',
      showimagecount: true,
      showthumbnails: true
    }
  },
  components: {
    vueImages: vueImages.default
  }
})
