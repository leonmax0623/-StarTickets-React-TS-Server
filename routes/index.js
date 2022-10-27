const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const ticketsRouter = require("./ticketsRouter");
const filmRouter = require("./filmRouter");
const datesRouter = require("./datesRouter");
const ratingRouter = require("./ratingRouter");

router.use("/user", userRouter);
router.use("/tickets", ticketsRouter);
router.use("/film", filmRouter);
router.use("/dates", datesRouter);
router.use("/rating", ratingRouter);

module.exports = router;
