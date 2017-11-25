# vue-images
[![npm version](https://img.shields.io/npm/v/vue-images.svg?style=flat-square)](https://badge.fury.io/js/vue-images)
[![MIT Licence](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/littlewin-wang/vue-images/blob/master/LICENSE)

> A simple lightbox component for displaying an array of images

<br><img src="https://cloud.githubusercontent.com/assets/14028075/22059135/9a633f74-dda6-11e6-8314-3b745801b4e1.gif" width="70%" height="70%">

## Feature

- Mobile friendly

- Thumbnail navigation

- Responsive design

## Demo & Examples
Live demo: [https://littlewin-wang.github.io/vue-images/example/](https://littlewin-wang.github.io/vue-images/example/)

## Start guide

- Import using module:
``` bash
// Install using npm
npm install vue-images --save

// In ES6 module
import vueImages from 'vue-images'

// Use module as component
new Vue({
  el: '#app',
  data () {
    return {
      images: [...],
      ...
    }
  },
  components: {
    vueImages: vueImages
  }
})
```
- Import using script tag:
``` html
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

## Options

Property | Type | Default	| Description
-------- | ---- | ------- | -----------
images | array	| undefined	| Required. An array of objects containing valid src and srcset values of img element
modalclose	| bool	| true	| Allow users to exit the lightbox by clicking the backdrop
keyinput	| bool	| true	| Supports keyboard input - esc, ←, and →
mousescroll	| bool	| true	| Supports mouse scroll
showclosebutton	| bool	| true	| Optionally display a close X button in top right corner
showcaption	| bool	| true	| Optionally display a caption under the image
imagecountseparator	| string	| ' of '	| Custom separator for the image count
showimagecount	| bool	| true	| Optionally display image index, e.g., "3 of 20"
showthumbnails	| bool	| false	| Optionally display thumbnails beneath the Lightbox

## Change log
- 1.0.0: Init file structure -> npm publish
- 1.0.1: Fix some bug when display in example page
- 1.0.2: Add basic config options
- 1.0.3: Add full screen and autoplay handle
- 1.0.4: Fix #2 & #3
- 1.0.5: Package css,js to single js file
- 1.0.6: fix #6
- 1.0.7: Fix #8
- 1.0.8: Fix #9 (add html parser in the caption & add flex-wrap to the gallery)
- 1.0.9: Add 'main' in package.json
- 1.0.10: Fix #17 & #14
- 1.1.0: Add transition & debounce strategy
