//Question: 4
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let fare = 50;
  if (distance > 2) {
    fare = fare + (distance - 2) * 15;
  }

  return fare;
}

console.log(getCngFare(3));
