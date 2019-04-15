require("dotenv").config();

// require express modules
let express = require("express");
let layouts = require("express-ejs-layouts");
let app = express();

// define express app
app.set("view engine", "ejs");
app.use(layouts);
app.use(express.urlencoded({ extended: false })); // IMPORTANT: makes post forms work

app.use("/spots", require("./controllers/spots"));
app.use("/reviews", require("./controllers/reviews"));

app.get("/", (req, res) => {
  res.render("home");
});


// listen on specified port
app.listen(process.env.PORT || 3004, () => {
  console.log("listening");
});
