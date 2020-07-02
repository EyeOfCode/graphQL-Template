const bcrypt = require("bcryptjs");

const genneratePassword = async (password) => {
  const saltRound = parseInt(process.env.SALT_ROUNDS);
  const salt = await bcrypt.genSalt(saltRound);
  const hashed = await bcrypt.hash(password, salt);
  return hashed;
};

const checkPassword = async (password, userPass) => {
  const isPasswordMatch = await bcrypt.compare(password, userPass);
  if (isPasswordMatch) {
    return true;
  }
};

module.exports = { genneratePassword, checkPassword };
