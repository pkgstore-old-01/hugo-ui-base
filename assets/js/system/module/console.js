export function init() {
  msg([
    '{{ i18n "console.buy_me" }} ☕ 😄 -> [ {{ "donate/" | absLangURL }} ] 😘',
    '{{ i18n "console.buy_me" }} 🍺 🤪 -> [ {{ "donate/" | absLangURL }} ] 😘',
    '{{ i18n "console.about_me" }} -> [ {{ "about/" | absLangURL }} ] 😉',
    '㊙️ ⬆️ ⬆️ ⬇️ ⬇️ ⬅️ ➡️ ⬅️ ➡️ 🅱️ 🅰️'
  ]);
}

function msg($message) {
  let $item;

  $item = $message[Math.floor(Math.random() * $message.length)];
  log($item, 'font-size: 2em;');
}

function log($text, $style = '') {
  console.log('%c' + $text, $style);
}
