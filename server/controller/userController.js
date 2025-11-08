const User = require("../models/UserModel");
const { comparePassword, hashPassword } = require("../libs/index.js");

const getUser = async (req, res) => {
  try {
    const { userId } = req.body.user;

    console.log("Received userId:", userId);

    if (!userId) {
      return res
        .status(400)
        .json({ status: "failed", msg: "userId is required" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ status: "failed", msg: "User not found" });
    }

    res.status(200).json({ status: "success", user });
  } catch (error) {
    console.error("Error in getUser:", error);
    res.status(500).json({ status: "failed", msg: error.message });
  }
};

const changePassword = async (req, res) => {
  try {
    const { userId } = req.body.user;
    if (!userId) {
      return res
        .status(400)
        .json({ status: "failed", msg: "userId is required" });
    }

    const { currentPassword, newPassword, confirmPassword } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({ status: "failed", msg: "user not found" });
    }

    if (newPassword !== confirmPassword) {
      return res.status(401).json({
        status: "failed",
        message: "New Password does not match.",
      });
    }

    const isMatch = await comparePassword(currentPassword, user?.password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ status: "failed", message: "Invalid current password." });
    }

    const hashedPassword = await hashPassword(newPassword);

    await User.updateOne(
      { _id: userId },
      { $set: { password: hashedPassword } }
    );

    res.status(200).json({
      status: "success",
      message: "Password changed successfully",
    });
  } catch (error) {
    console.error("Error in changePassword:", error);
    res.status(500).json({ status: "failed", message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId } = req.body.user;

    if (!userId) {
      return res
        .status(400)
        .json({ status: "failed", msg: "userId is required" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ status: "failed", message: "User not found." });
    }

    const { firstname, lastname, country, currency, contact,email } = req.body;

    await User.updateOne(
      { _id: userId },
      {
        $set: {
          firstName: firstname,
          lastName: lastname,
          country: country,
          currency: currency,
          contact: contact,
        },
      }
    );

    const updatedUser = await User.findById(userId);
    updatedUser.password = undefined;

    res.status(200).json({
      status: "success",
      message: "User updated successfully.",
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "failed", message: error.message });
  }
};

module.exports = { getUser, changePassword, updateUser };

