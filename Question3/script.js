// Question 3
function validateUserName(userName) {
  if (userName.lemngth < 4) {
    return "Too short";
  } else if (userName.includes(" "){
  return "No Space Allowed";
  }
}
