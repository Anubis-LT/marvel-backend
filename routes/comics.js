const express = require("express");
const router = express.Router();

router.get("/list", async (req, res) => {
  try {
    // Returns the number of results found

    res.status(200).json({
      list: ok,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
module.exports = router;
