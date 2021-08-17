const express = require("express");

const re = require('./demo/getTest');
const users = require('./demo/Users');


const app = express();
const port = 5000
app.set("db", 'gema');

app.get("/test", re);
app.get("/users", users);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
