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
console.log(validateUserName("a b"));
