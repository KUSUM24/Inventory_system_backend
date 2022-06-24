const router = require("express").Router();

router.get("/", async (req, res) => {
  return res.send("OK");
});

module.exports = router;
