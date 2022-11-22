const express = require("express");
const { doSignup } = require("../controllers/userController");
const router = express.Router();

router.post("/signup", doSignup);

module.exports = router;
