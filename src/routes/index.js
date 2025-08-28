const { Router } = require("express");

const router = Router();

// Endpoint simples de teste
router.get("/hello", (req, res) => {
  res.send("Hello World 🚀");
});

module.exports = router;
