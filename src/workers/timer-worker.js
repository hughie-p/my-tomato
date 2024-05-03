onmessage = function (e) {
  const { startTime, endTime } = e.data;

  console.log("Worker: Message received from main script", startTime, endTime);

  const intervalId = setInterval(() => {
    const currentTime = new Date().getTime();
    if (currentTime >= endTime) {
      clearInterval(intervalId);
      postMessage("Timer has ended");
    } else {
      postMessage(currentTime);
    }
  }, 1000);
};
