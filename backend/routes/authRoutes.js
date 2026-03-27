const express = require("express");
const router = express.Router();

const { signup, login, deleteAccount } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware")

router.post("/auth/signup", signup);
router.post("/auth/login", login);
router.delete("/auth/delete-account", authMiddleware, deleteAccount);

module.exports = router;