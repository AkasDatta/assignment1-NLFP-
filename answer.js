// Qusation 1
function describeValue(value) {
  const type = typeof value;
  const truthiness = value ? "truthy" : "falsy";
  return `${type} | ${truthiness}`;
}

//Question: 2
function getDayType(day) {
  const normalDay = day.toLowerCase();
  switch (normalDay) {
    case "friday":
    case "saturday":
    case "sunday":
      return "Weekend";
    case "monday":
    case "tuesday":
    case "wednessday":
    case "thursday":
    case "working day":
    default:
      return "Invalid Day";
  }
}

// Question 3
function validateUserName(userName) {
  if (userName.length < 4) {
    return "Too short";
  } else if (userName.includes(" ")) {
    return "No Space Allowed";
  } else if (userName.toLowerCase().includes(" ")) {
    return "Received words";
  } else {
    return "Available";
  }
}

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

// Question: 5
const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;

  if (runsNeeded <= 0) {
    return "Won";
  } else if (ballsLeft <= 0) {
    return "Lost";
  } else {
    const requiredRate = (runsNeeded / ballsLeft) * 6;
    let verdict;
    if (requiredRate <= 6) {
      verdict = "Comfortable";
    } else if (requiredRate <= 12) {
      verdict = "Tough";
    } else {
      verdict = "Almost Impossible";
    }
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
  }
};
