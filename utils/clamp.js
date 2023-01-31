// export default function clamp(num, min, max) {
//   return Math.min(Math.max(num, min), max);
// }

export default function clamp(number, lower, upper) {
  number = +number;
  lower = +lower;
  upper = +upper;
  lower = lower === lower ? lower : 0;
  upper = upper === upper ? upper : 0;
  if (number === number) {
    number = number <= upper ? number : upper;
    number = number >= lower ? number : lower;
  }
  return number;
}
