'use strict';

function worker() {
  onmessage = ($event) => {
    importScripts('/js/vendor/highlight/highlight.js');
    const $result = self.hljs.highlightAuto($event.data);
    postMessage($result.value);
    close();
  };
}

worker();
