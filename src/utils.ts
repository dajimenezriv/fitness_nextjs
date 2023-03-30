// https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
const mulberry32 = (a: number) => {
  return () => {
    var t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}
const rand = mulberry32(0);

export const getRandomInt = (min: number, max: number) => {
  return Math.floor(rand() * (max - min) + min);
}
