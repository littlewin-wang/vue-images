# vue-images
[![npm version](https://img.shields.io/npm/v/vue-images.svg)](https://badge.fury.io/js/vue-images)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.png?v=103)](https://github.com/littlewin-wang/vue-images/blob/master/LICENSE)

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
- 1.0.3: Fix #2 & #3
