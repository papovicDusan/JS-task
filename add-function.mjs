export function randomTime() {
  let hrs = Math.round(Math.random() * 12);
  let mins = Math.round(Math.random() * 60);
  let hFormat = hrs < 10 ? "0" : "";
  let mFormat = mins < 10 ? "0" : "";
  let amPm = hrs < 12 ? "AM" : "PM";
  return String(hFormat + hrs + ":" + mFormat + mins + " " + amPm);
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
