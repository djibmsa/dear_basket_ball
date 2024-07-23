const express = require("express");

const router = express.Router();

const { browse, read, add } = require("../../../controllers/userAction");
const { hashPassword } = require("../../../services/middlewares/auth");

router.get("/", browse);

router.get("/:id", read);

router.post("/", hashPassword, add);

module.exports = router;
