const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.body);

  res.status(200).json({
    success: true,
    message: "API Working Successfully"
  });
});

module.exports = router;