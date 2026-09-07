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
console.log(getDayType("friday"));
