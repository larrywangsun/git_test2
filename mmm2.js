function throttle(func, wait, trailing) {
  let lastTime = 0;
  let timer;

  return function () {
    let args = arguments;
    let self = this;
    let now = new Date().getTime();

    let remaining = wait - (now - lastTime);
    if (remaining <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      func.apply(self, args);
      lastTime = now;
    } else if (!timer && trailing !== false) {
      timer = setTimeout(function () {
        func.apply(self, args);
        lastTime = new Date().getTime();
      }, remaining);
    }
  };
}


// 该方法是，滚动到页面底部时，触发的动作..
let handler = function () { };

// 节流
let handlerThrottle = throttle(handler, 1000, false);

document.documentElement.addEventListener("scroll", function () {
    if (this.scrollTop + this.offsetHeight >= this.scrollHeight) {
      handlerThrottle();
    }
  },
  false
);

/// master  dev2
