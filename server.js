const express = require("express");

const app = express();

const PORT = 3000;
const friends = [
  {
    id: 0,
    name: "Sir Isaac Newton",
  },
  {
    id: 1,
    name: "Albert Einstein",
  },
];

// First Middleware
app.use((req, res, next) => {
  // first request will come in here
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms `);
});

app.use(express.json()); // sets body to {} if nothing is passed in request

app.post("/friends", (req, res) => {
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
});

app.get("/", (req, res) => {
  // express will convert this to json
  res.json(friends);
});

app.get("/friends/:id", (req, res) => {
  const friendId = parseInt(req.params.id);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "No Friends With this id",
    });
  }
});

app.get("/friend", (req, res) => {
  res.json(friends);
});

app.post("/messages", async (req, res) => {
  console.log("Updating Messages");
});

app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
