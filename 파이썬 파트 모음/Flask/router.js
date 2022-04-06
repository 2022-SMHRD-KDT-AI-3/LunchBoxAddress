const express = require("express");
const router = express.Router();

router.get("/reco", function(request, response) {
    response.render("reco", {

    });
});

module.exports = router;