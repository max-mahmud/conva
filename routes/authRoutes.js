const router = require("express").Router();
const authController = require("../controller/authController");

router.post("/user-register", authController.user_Register);
router.post("/user-login", authController.user_login);

module.exports = router;
