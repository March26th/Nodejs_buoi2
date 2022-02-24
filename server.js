const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const data = [
  {
    id: 0,
    name: "letrungnguyen",
    age: 20,
    address: "nghe an",
  },
  {
    id: 1,
    name: "trinhduongnhat",
    age: 20,
    address: "nghe an",
  },
  {
    id: 2,
    name: "dauxuanhai",
    age: 25,
    address: "ha noi",
  },
];

app.get("/users", (req, res) => {
  res.json(data);
});

app.post("/users", (req, res) => {
  const NewData = req.body;
  data.push(NewData);
  res.json("created");
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const index = data.findIndex((da) => da.id == id);
  if (index == -1) {
    res.json("Không đúng id");
    return;
  }
  const newData = req.body;
  console.log(newData);
  data[index] = newData;
  res.json("changed");
});

app.delete("/users/:id", (req, res) => {
  let { id } = req.params;
  const index = data.findIndex((da) => da.id == id);
  if (index === -1) {
    res.json("id không đúng");
    return;
  }
  data = data.slice(index);

  res.json("deleted");
});

app.listen(port, () => {
  console.log("Example app listening on port ${port}");
});