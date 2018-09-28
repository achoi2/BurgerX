const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 5000;

const users = require("./routes/api/users");
const reservations = require('./routes/api/reservations');
const menu = require('./routes/api/menu');
const orders = require('./routes/api/orders');


const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use('/api/reservations', reservations);
app.use('/api/orders', orders);
app.use('/api/menu', menu);

app.listen(port, () => console.log(`listening on port: ${port}`));
