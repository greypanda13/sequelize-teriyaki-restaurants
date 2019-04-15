let express = require("express");
let db = require("../models");
let router = express.Router();

router.get("/", (req, res) => {
  db.spot.findAll()
  .then((spots) => {
    console.log('helooooo')
    res.render("spots/index", { spots });
  })
  .catch((err) => {
    console.log("err in GET /spots", err);
    res.render("404");
  });
});

router.post("/", (req, res) => {
  console.log(req.body);
  db.spot.create(req.body)
  .then((createdSpot) => {
    res.redirect(`/spots/${createdSpot.id}`); // NOT relative path (for ultimate mobility)
  })
  .catch((err) => {
    console.log("err in POST /spots", err);
  });
});

router.get("/new", (req, res) => {
  res.render("spots/new");
});

router.get("/:id", (req, res) => {
  db.spot.findByPk(req.params.id)
  .then((foundSpot) => {
    res.render("spots/show", {
      spot: foundSpot
    });
  })
  .catch((err) => {
    console.log("err in GET /spots/:id", err);
    res.render("404");
  });
});

module.exports = router;
