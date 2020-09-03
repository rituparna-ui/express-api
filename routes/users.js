const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { getAll, createUser, getById, deleteUser, patchUser } = require("./../controllers/userControl");

let users = [];

router.get("/",getAll);

router.post("/",createUser);

router.get("/:id",getById);

router.delete("/:id",deleteUser);

router.patch("/:id",patchUser);

module.exports = router;
