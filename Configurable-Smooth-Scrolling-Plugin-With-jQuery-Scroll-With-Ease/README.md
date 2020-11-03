# jQuery Scrool With Ease Plugin

##### Makes scroolling smoother and normalizes scroll delta.
###### Port from [ivmello's, easeScroll](https://github.com/ivmello/easeScroll/).

### Instalation
Donwload it from Bower Repository.

```
bower install scroll-with-ease --save
```
Request the file in your index.html.
```html
<script type="text/javascript" src="bower-components/scroll-with-ease/dist/scroll-with-ease.js"></script>
```
Initiate the plugin.
```javascript
$(document).ready(function() {
    $('html').scrollWithEase();
});
```

## Options
##### You can customize the scroll behaviour by passing options while initiating the plugin:
```javascript
$(document).ready(function() {
    $('html').scrollWithEase({
        frameRate: 60,
        animationTime: 1000,
        stepSize: 120,
        pulseAlgorithm: !0,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1,
        keyboardSupport: !0,
        arrowScroll: 50    
    });
});
```
### The MIT License (MIT)

Copyright (c) 2017 Marcel de Oliveira Coelho

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.