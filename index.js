const express = require("express");
const path = require("path");
const mainRoute = require("./src/routes/mainRoute.js");
const shopRoute = require("./src/routes/shopRoute.js");
const adminRoute = require("./src/routes/adminRoute");
const authRoute = require("./src/routes/authRoute.js");
const override = require("method-override");

const app = express(); //ejecuto el modulo

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/src/views"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded());
app.use(express.json());
app.use(override("_method")); //sobreescribir metodos

app.use("/", mainRoute);
app.use("/", shopRoute);
app.use("/", adminRoute);
app.use("/", authRoute);

app.use((req, res, next) => {
  res.status(404).render(`404`);
});

const port = process.env.PORT || 3306;

app.listen(port, () =>
  console.log(`El server ésta funcionando en localhost: ${port}`)
);
