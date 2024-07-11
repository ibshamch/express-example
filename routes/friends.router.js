const express = require("express");

const friendsRouter = express.Router();

const {
  postFriends,
  getAllFriends,
  getFriendById,
} = require("./../controllers/friends.controller");

friendsRouter.post("/", postFriends);
friendsRouter.get("/:id", getFriendById);
friendsRouter.get("/", getAllFriends);

module.exports = friendsRouter;
