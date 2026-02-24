function isValidPassword(password) {
  let isLengthValid = password.length >= 8;
  let hasLetter = /[A-Za-z]/.test(password);
  let hasNumber = /[0-9]/.test(password);
  let hasSpecialChar = /[!@#$%]/.test(password);

  return (
    isLengthValid &&
    hasLetter &&
    hasNumber &&
    hasSpecialChar
  );
}

module.exports = { isValidPassword };
