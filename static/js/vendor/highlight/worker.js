function worker() {
  onmessage = (event) => {
    importScripts('/js/vendor/module/highlight/highlight.js');
    const result = self.hljs.highlightAuto(event.data);
    postMessage(result.value);
    close();
  };
}

worker();
