const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

/**
 *
 * @param {*} userId
 * @param {*} expired minute
 */
const generateToken = (payload) => {
  const { userId, v, scope, expiry = 10080 } = payload;
  return jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + expiry * 60, // 7 days,
      sub: userId,
      v,
      scope,
    },
    secret
  );
};

const verifyToken = (payload) => {
  const { token } = payload;
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return {};
  }
};

module.exports = {
  generateTokenUrl,
  generateToken,
  generateTokenEmail,
  verifyToken,
};
