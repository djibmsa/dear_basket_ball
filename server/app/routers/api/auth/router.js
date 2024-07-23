const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import auth-related actions
const { login } = require("../../../controllers/authActions");

// const { add, read } = require("../../../controllers/userAction");

/*
const {
  hashPassword,
  verifyToken,
} = require("../../../services/middlewares/auth");
*/

// Route to add a new item
router.post("/login", login);

// Route to add a new item
// router.post("/register", hashPassword, add);

// Route to logout the user

// router.get("/logout", logout);

// Route to get user profile

// router.get("/:id", verifyToken, read);

/* ************************************************************************* */

module.exports = router;
