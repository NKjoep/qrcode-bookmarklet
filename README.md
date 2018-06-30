## How to use it

1. Drag the bookmarket into your bookmarks bar:
<!-- {% raw %} -->
<span style="font-size: 10px;">
<a style="
  background: #3498db;
  background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
  background-image: -moz-linear-gradient(top, #3498db, #2980b9);
  background-image: -ms-linear-gradient(top, #3498db, #2980b9);
  background-image: -o-linear-gradient(top, #3498db, #2980b9);
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 1em;
  color: #ffffff;
  font-size: 1.2em;
  padding: 1em 2em 1em 2em;
  text-decoration: none;
" href="javascript:; (function() {  var qriousUrl = 'https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.2/qrious.min.js';  var id = 'qrious-script-id__' + qriousUrl.replace(/[^\w]|\./g, '_');  var $body = document.getElementsByTagName('body')[0];  if (!window.QRious) {      var $qriousScript = document.createElement('script');      $qriousScript.setAttribute('src', qriousUrl);      $qriousScript.setAttribute('id', id);      $qriousScript.addEventListener('load', generate);      $body.appendChild($qriousScript);  } else {    generate();  }  function generate() {    var $canvas = document.createElement('canvas');    $canvas.addEventListener('click', function() {      $canvas.parentNode.removeChild($canvas);    });    $canvas.setAttribute('title', 'Click to close');    $canvas.setAttribute('style', [      'position: fixed;',      'right: 2vw;',      'top: 2vh;',      'height: 500px;',      'width: 500px;',      'box-shadow: -9px 15px 6px 3px rgba(0, 0, 0, 0.51);',      'z-index: 9999999;',      'padding: 1vw;',      'background: #2c62b8;',      'border-radius: 1rem;',      'cursor: pointer;'    ].join(''));    new QRious({      element: $canvas,      value: window.location.href,      size: 500,    });    $body.appendChild($canvas);  }})();;">Qrcode Bookmarket</a>
</span>
<!-- {% endraw %}) -->

2. Click on it whenever needed.

### Demo

<!-- {% raw %} -->
<video controls
    src="demo.mp4"
    poster="demo-poster.jpg"
    width="300">
Sorry, your browser doesn't support embedded videos,
but don't worry, you can <a href="demo.mp4">download it</a>
and watch it with your favorite video player!
</video>
<!-- {% endraw %}) -->
