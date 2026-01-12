const { Router } = require("express");
const router = Router();
const mainRouter = require("./MainRouter/index");

router.use("/mainRouter", mainRouter);

module.exports = router;
