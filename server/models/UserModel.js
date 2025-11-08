const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  contact: {
      type: String,
      required: false,
    },
    accounts: {
      type: [String],
      required: false,
    },
    provider: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    currency: {
      type: String,
      default: '₹',
      required: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
