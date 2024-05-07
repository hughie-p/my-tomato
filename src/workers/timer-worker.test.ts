import "@vitest/web-worker";
import { describe, it } from "vitest";

const timerWorker = new Worker(new URL("./timer-worker", import.meta.url), {
  type: "module",
});

describe("TimerWorker", () => {
  it("should start a timer", (t) => {
    timerWorker.postMessage({ type: "start", timeCount: 10 });
    timerWorker.onmessage = (e) => {
      t.expect(e.data).toBe(9);
    };
  });

  it("should pause a timer", () => {
    timerWorker.postMessage({ type: "pause" });
  });
});
