const router = require("express").Router();

router.get("/", async (req, res) => {
  return res.send("Category");
});

module.exports = router;
