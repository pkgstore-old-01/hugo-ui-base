export function init() {
  generator('[data-ext-fn="ext-qrcode"]');
}

function generator($selector) {
  const $el = document.querySelectorAll($selector);
  const $length = $el.length;
  let $text;

  for (let $i = 0; $i < $length; ++$i) {
    $text = $el[$i].getAttribute('data-ext-text');
    qrcode($el[$i], $text);
  }
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
