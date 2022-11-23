const { errbody, respbody } = require("../helper/generateResponse");
const User = require("../models/userModel");

module.exports = {
  doSignup: async (req, res) => {
    const { email } = req.body;
    try {
      const userExist = await User.findOne({ email });
      if (userExist) return errbody(res, "user already exists");
      const user = new User(req.body);
      user.save((err, doc) => {
        if (err) return errbody(res, err);
        else return respbody(res, doc);
      });
    } catch (err) {
      return errbody(res, err);
    }
  },

  doLogin: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user) {
        const correctPassword = await user.comparePassword(password);
        if (correctPassword) {
          const token = await user.generateToken();
          return respbody(res, { ...user, token });
        } else {
          return errbody(res, "Incorrect Password");
        }
      } else {
        return errbody(res, "Invalid Username");
      }
    } catch (err) {
      return errbody(res, err);
    }
  },
};
