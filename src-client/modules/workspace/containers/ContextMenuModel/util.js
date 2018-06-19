/**
 * 产生唯一的key
 *
 * @type       {Array}
 */
const randomKeys = [];
export default function generateRandomKey() {
  let key = Math.random()
    .toString()
    .substring(2);
  while (randomKeys.includes(key)) {
    key = Math.random()
      .toString()
      .substring(2);
  }
  return key;
}
