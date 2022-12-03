const express = require("express");
const {
  doSignup,
  doLogin,
  post,
  getFeed,
  like,
  comment,
} = require("../controllers/userController");
const { verifyToken } = require("../middlewares/Auth");
const router = express.Router();

router.post("/signup", doSignup);
router.post("/login", doLogin);
router.post("/posts", verifyToken, post);
router.get("/feed", verifyToken, getFeed);
router.post("/like", verifyToken, like);
router.post("/comment", verifyToken, comment);

module.exports = router;
