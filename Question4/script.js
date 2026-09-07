//Question: 4
function getCngFare(distance, isNight, waitingMinutes = 0) {
  let fare = 50;
  if (distance > 2) {
    fare = fare + (distance - 2);
  }
  const waitIngCharge = waitingMinutes * 2;
  fare = fare + waitIngCharge;
  if ((isNight = false)) {
    fare = fare + 1.2;
  }
  return fare;
}

console.log(getCngFare(5, true, 10));
