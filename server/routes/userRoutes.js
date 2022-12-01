const express = require("express");
const { doSignup, doLogin, post, getFeed } = require("../controllers/userController");
const router = express.Router();

router.post("/signup", doSignup);
router.post("/login", doLogin);
router.post("/posts", post);
router.get("/feed", getFeed);

module.exports = router;
