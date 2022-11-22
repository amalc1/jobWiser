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
        return respbody(res, { doc });
      });
    } catch (err) {
      return errbody(res, err);
    }
  },

  
};
