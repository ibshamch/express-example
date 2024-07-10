function postFriends(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing Friend Name",
    });
    // Do not run any code if no friend is added
  }
  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };

  friends.push(newFriend);
  res.json(newFriend);
}

function getFriendById(req, res) {
  const friendId = parseInt(req.params.id);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "No Friends With this id",
    });
  }
}

function getAllFriends(req, res) {
  res.json(friends);
}
module.exports = {
  postFriends,
  getAllFriends,
  getFriendById,
};
