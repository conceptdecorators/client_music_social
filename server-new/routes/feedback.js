const express = require("express");
const router = express.Router();
const { emailFeedback } = require("../../server-new/controllers/feedback");

router.post("/feedback", emailFeedback);

module.exports = router;
