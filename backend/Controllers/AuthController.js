const User = require("../schema/UserSchema");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");


// ===============================
// SIGNUP
// ===============================

module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
        success: false,
      });
    }

    const user = await User.create({
      email,
      password,
      username,
    });

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });

  } catch (error) {
    console.error("SIGNUP ERROR:", error);

    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};


// ===============================
// LOGIN
// ===============================

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check required fields
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
        success: false,
      });
    }

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    // Compare password with hashed password
    const auth = await bcrypt.compare(password, user.password);

    if (!auth) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    // Create JWT
    const token = createSecretToken(user._id);

    // Store JWT in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return res.status(200).json({
      message: "User logged in successfully",
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });

  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};



// ===============================
// LOGOUT
// ===============================


module.exports.Logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });

  return res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};