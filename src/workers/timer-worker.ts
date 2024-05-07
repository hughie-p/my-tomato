let _startTime: number;
let _timeCount: number;
let _currentTimeCount = 0;
let intervalId: ReturnType<typeof setInterval>;

function initializeCycle() {
  _startTime = new Date().getTime();
  _timeCount = 0;
  _currentTimeCount = 0;
}

self.addEventListener("message", function (e) {
  const { type, timeCount } = e.data;

  if (type === "start") {
    _timeCount = timeCount;
    _startTime = new Date().getTime();

    intervalId = setInterval(() => {
      _currentTimeCount = _currentTimeCount + 1;

      if (_currentTimeCount === _timeCount) {
        clearInterval(intervalId);
      }
      postMessage(_timeCount - _currentTimeCount);
    }, 1000);
  }

  if (type === "pause") {
    clearInterval(intervalId);
  }

  if (type === "next-cycle") {
  }
});
