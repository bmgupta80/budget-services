var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.status(200).json({
    status: true,
    code: 200,
    data: {
      users: [
        {
          id: 1,
          first_name: "MaheshGupta",
          last_name: "Boddu",
        },
        {
          id: 2,
          first_name: "MaheshGupta",
          last_name: "Boddu",
        },
      ],
    },
  });
});

module.exports = router;
