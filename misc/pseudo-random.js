export function random() {
  const d = (new Date()).getTime();
  const seed = Math.random();
  return `${d}${seed}`;
}
