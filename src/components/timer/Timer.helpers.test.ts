import { test } from "vitest";
import { formatTime } from "./Timer.helpers";

test("Timer.helpers", (t) => {
  t.expect(formatTime(-1)).toThrowError(new Error("Time cannot be negative"));
  t.expect(formatTime(0)).toBe("0:00");
  t.expect(formatTime(60)).toBe("1:00");
  t.expect(formatTime(61)).toBe("1:01");
});
