const router = require("express").Router();

router.get("/", async (req, res) => {
  return res.send("Product");
});

module.exports = router;
