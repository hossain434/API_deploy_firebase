const functions = require("firebase-functions");
const path = require("path");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = 5000;

app.get("/api/products", (req, res) => {
  res.sendFile(path.join(__dirname, "data", "products.json"));
});

app.listen(port, () => {
  console.log(`[products] API listening on port ${port}.`);
});
exports.app = functions.https.onRequest(app);
