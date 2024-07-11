function getMessages(req, res) {
  res.send(`<ul><li>Hello Albert</li></ul>`);
}

function postMessage(req, res) {
  res.send(req.body); // will return an empty object
}

module.exports = {
  getMessages,
  postMessage,
};
