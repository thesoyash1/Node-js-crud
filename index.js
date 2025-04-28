const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/itemRouter");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`serever is runnninf on port ${PORT}`);
});
