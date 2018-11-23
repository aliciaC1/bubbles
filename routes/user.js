const router = require("express").Router();
const user = require('./../controller/user.js');

router.route("/register").post(user.register);

router.route("/login").post(user.login);

router.route("/find").get(user.findAll);

router.route("/logout").get(user.logout);

router.route("/check").get(user.findUser);

module.exports = router;
