const express = require("express");
const {
  doSignup,
  doLogin,
  post,
  getFeed,
  like,
  comment,
  deletePost,
  signupVerification,
  resendOtp,
  getUser,
} = require("../controllers/userController");
const { verifyToken } = require("../middlewares/Auth");
const { User } = require("../models/userModel");
const router = express.Router();

router.post("/signup", doSignup);
router.post("/verify-otp", signupVerification);
router.post("/resend-otp", resendOtp);
router.post("/login", doLogin);
router.post("/posts", verifyToken, post);
router.get("/feed", verifyToken, getFeed);
router.post("/like", verifyToken, like);
router.post("/comment", verifyToken, comment);
router.get("/delete-post", verifyToken, deletePost);
router.get("/getUser/:id", verifyToken, getUser);

// router.post("/createTestUser", (req, res) => {
//   User.create(req.body);
//   res.send("done");
// });

module.exports = router;
