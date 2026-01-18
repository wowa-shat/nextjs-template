/**
 * Converts seconds to MM:SS format
 */
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Converts duration string to seconds
 */
export function durationToSeconds(duration: string): number {
  const [mins, secs] = duration.split(':').map(Number);
  return mins * 60 + secs;
}
