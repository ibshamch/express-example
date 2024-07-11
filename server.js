const express = require("express");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");
const app = express();

const PORT = 5000;

// First Middleware
app.use((req, res, next) => {
  // first request will come in here
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms `);
});

app.use(express.json()); // sets body to {} if nothing is passed in request

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.get("/", (req, res) => {
  // express will convert this to json
  res.json(friends);
});
app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
