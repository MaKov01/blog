const express = require("express");
const app = express();
const path = require("path");


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require("./routes/index"));
app.use(express.static(path.join(__dirname, "public")));
var port_number = app.listen(process.env.PORT || 3000);
app.listen(port_number);