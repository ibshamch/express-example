const express = require("express");

const {
  postFriends,
  getAllFriends,
  getFriendById,
} = require("./../controllers/friends.controller");
const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log(
    `${req.ip} is making the ${req.baseUrl}${req.url} ${req.method} request `
  );
  next();
});

friendsRouter.post("/", postFriends);
friendsRouter.get("/:id", getFriendById);
friendsRouter.get("/", getAllFriends);

module.exports = friendsRouter;
