const express = require("express");

const router = express.Router();

const { boston } = require("../../controllers/bostonActions");

router.get("/", boston);

const playersRouter = require("./players/router");
const franchisesRouter = require("./franchises/router");
const userRouter = require("./user/router");
const authRouter = require("./auth/router");

router.use("/players", playersRouter);
router.use("/franchises", franchisesRouter);
router.use("/user", userRouter);
router.use("/auth", authRouter);

module.exports = router;
