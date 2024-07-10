const express = require("express");
const {
  getMessages,
  postMessage,
} = require("./controllers/messages.controller");
const {
  postFriends,
  getAllFriends,
  getFriendById,
} = require("./controllers/friends.controller");
const app = express();

const PORT = 3000;

// First Middleware
app.use((req, res, next) => {
  // first request will come in here
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms `);
});

app.use(express.json()); // sets body to {} if nothing is passed in request

app.get("/", (req, res) => {
  // express will convert this to json
  res.json(friends);
});

app.post("/friends", postFriends);
app.get("/friend/:id", getFriendById);
app.get("/friends", getAllFriends);

app.get("/messages", getMessages);
app.post("/messages", postMessage);

app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
