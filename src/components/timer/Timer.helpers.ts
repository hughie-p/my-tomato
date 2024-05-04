export function formatTime(timeInSec: number) {
  if (timeInSec < 0) throw new Error("Time cannot be negative");

  const minutes = Math.floor(timeInSec / 60);
  const seconds = Math.floor(timeInSec % 60);

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}
