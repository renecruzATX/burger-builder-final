const express = require("express");
const router = express.Router();
const {list,show,create,remove} = require( "../controllers/OrderController");


router.get("/", list);
router.get("/:id", show);
router.post("/", create);
router.delete("/:id", remove);

module.exports = router;