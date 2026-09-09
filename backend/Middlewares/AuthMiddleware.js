const User = require("../schema/UserSchema");
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        status: false,
        message: "No token provided",
      });
    }

    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) {
        return res.status(401).json({
          status: false,
          message: "Invalid or expired token",
        });
      }

      const user = await User.findById(data.id);

      if (!user) {
        return res.status(401).json({
          status: false,
          message: "User not found",
        });
      }

      return res.status(200).json({
        status: true,
        user: user.username,
      });
    });
  } catch (error) {
    console.error("AUTH ERROR:", error);

    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};