var express = require("express");
const { getCategories } = require("../controllers/categories_controller");
const { prepareSuccessResponse } = require("../utils/responseutils");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  getCategories()
    .then((data) => {
      res
        .status(200)
        .json(prepareSuccessResponse({ categories: data }))
        // .json({ status: true, code: 200, data:  });
    })
    .catch((ex) => {
      console.error(ex);
      res.status(400).json({ status: false, code: 400, message: ex });
    });
});

module.exports = router;
