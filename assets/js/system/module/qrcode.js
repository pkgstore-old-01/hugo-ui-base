export function init() {
  generator('[data-ext-fn="ext-qrcode"]');
}

function generator($selector) {
  const $el = document.querySelectorAll($selector);
  let $text;

  $el.forEach(($i) => {
    $text = $i.getAttribute('data-ext-text');
    qrcode($i, $text);
  });
}

function qrcode($selector, $text, $size = 128) {
  let $options;

  $options = {
    text: $text,
    width: $size,
    height: $size,
    backgroundImage: '/img/icon.svg',
    backgroundImageAlpha: 0.3,
    drawer: 'svg'
  }

  return new QRCode($selector, $options);
}
