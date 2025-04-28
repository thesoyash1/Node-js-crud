const express = require("express");
const router = express.Router();
const userCrudController = require("../controller/userCrudController");

router.post("/create", userCrudController.createUserData);
router.get("/", userCrudController.getAllUserData);
router.post("/update/:id", userCrudController.updateUserData);
router.get("/delete/:id", userCrudController.deleteData);

module.exports = router;
