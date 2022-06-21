const express = require("express");
const cors = require("cors");

const data = require("./data/personnel.json");

const PORT = 1235;
const app = express();

app.use(cors());

app.get("/api/personnel", (req, res) => {
  res.send(data);
});

//sorted personnel
app.get("/api/personnel/sort", (req, res) => {
  returnData = data.sort((a, b) => a.GivenName.localeCompare(b.GivenName));
  res.send(returnData);
});

//filtered personnel
app.get("/api/personnel/filter/:filterQuery", (req, res) => {
  returnData = data.filter(
    (person) => person.GivenName == req.params.filterQuery
  );
  res.send(returnData);
});

app.listen(PORT, () =>
  console.log(`App running at http://localhost on port ${PORT}`)
);
