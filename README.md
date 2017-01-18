# vue-images

> A simple lightbox component for displaying an array of images

## Feature

- Mobile friendly

- Thumbnail navigation

- Responsive design

## Demo & Examples
Live demo: [https://littlewin-wang.github.io/vue-images/example/](https://littlewin-wang.github.io/vue-images/example/)

## Install

- Import using module:
``` bash
// Install using npm
npm install vue-images --save

// Include stylesheet
require('vue-images/dist/vue-images.css')

// In ES6 module
import vueImages from 'vue-images'
```
- Import using script tag:
``` html
<link rel="stylesheet" href="../node-modules/vue-images/dist/vue-images.css" charset="utf-8">
<script src="../node-modules/vue-images/dist/vue-images.js"></script>
```

``` js
new Vue({
  el: '#app',
  data () {
    return {
      images: [...],
      ...
    }
  },
  components: {
    vueImages: vueImages.default
  }
})
```
