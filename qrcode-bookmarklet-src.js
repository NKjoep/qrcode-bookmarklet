; (function() {
  var qriousUrl = 'https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.2/qrious.min.js';
  var id = 'qrious-script-id__' + qriousUrl.replace(/[^\w]|\./g, '_');
  var $body = document.getElementsByTagName('body')[0];

  if (!window.QRious) {
      var $qriousScript = document.createElement('script');
      $qriousScript.setAttribute('src', qriousUrl);
      $qriousScript.setAttribute('id', id);
      $qriousScript.addEventListener('load', generate);
      $body.appendChild($qriousScript);
  } else {
    generate();
  }

  function generate() {
    var $canvas = document.createElement('canvas');
    $canvas.addEventListener('click', function() {
      $canvas.parentNode.removeChild($canvas);
    });

    $canvas.setAttribute('title', 'Click to close');
    $canvas.setAttribute('style', [
      'position: fixed;',
      'right: 2vw;',
      'top: 2vh;',
      'height: 500px;',
      'width: 500px;',
      'box-shadow: -9px 15px 6px 3px rgba(0, 0, 0, 0.51);',
      'z-index: 9999999;',
      'padding: 1vw;',
      'background: #2c62b8;',
      'border-radius: 1rem;',
      'cursor: pointer;'
    ].join(''));

    new QRious({
      element: $canvas,
      value: window.location.href,
      size: 500,
    });

    $body.appendChild($canvas);
  }
})();
