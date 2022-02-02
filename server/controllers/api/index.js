const router = require("express").Router();
const userRoutes = require("./userRoutes");
// const beerRoutes = require("./beerRoutes");

router.use("/users", userRoutes);
// router.use("/beers", beerRoutes);

module.exports = router;
