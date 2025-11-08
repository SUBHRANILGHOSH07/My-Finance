const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const hashPassword = async (userValue) => {
  const salt = await bcrypt.genSalt(10);

  const hashPassword = await bcrypt.hash(userValue, salt);

  return hashPassword;
};

const comparePassword = async (userPassword, password) => {
    try {
        const isMatch = await bcrypt.compare(userPassword, password)
        return isMatch
    } catch (error) {
        console.log(error);
    }
};

const createJWT = (id) => {
  return jwt.sign({ userId: id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

const getMonthName = (index) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[index];
};

module.exports = { hashPassword, comparePassword, createJWT, getMonthName };
