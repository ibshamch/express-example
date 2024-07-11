const path = require("path");
function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "skimountain.jpg"));
}

function postMessage(req, res) {
  res.send(req.body); // will return an empty object if req is empty
}

module.exports = {
  getMessages,
  postMessage,
};
