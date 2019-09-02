const express = require("express");
require("dotenv").config();
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
var url = process.env.MONGODB_URI;

const app = express();
//allow cross-origin requests
app.use(cors());

mongoose.connect(url);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Now listeing for requests on port 40000");
});
