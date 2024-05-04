let _startTime;
let _timeCount;
let _currentTimeCount = 0;
let intervalId;

self.addEventListener("message", function (e) {
  const { type, timeCount } = e.data;

  if (type === "start") {
    _timeCount = timeCount;
    _startTime = new Date().getTime();

    intervalId = setInterval(() => {
      _currentTimeCount = _currentTimeCount + 1;

      console.log({ _currentTimeCount, _timeCount });
      if (_currentTimeCount === _timeCount) {
        clearInterval(intervalId);
      }
      postMessage(_timeCount - _currentTimeCount);
    }, 1000);
  }

  if (type === "pause") {
    clearInterval(intervalId);
  }
});
