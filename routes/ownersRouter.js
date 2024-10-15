const express = require("express");
const router = express.Router();

const ownerModel = require("../models/owner.model");

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res
        .status(504)
        .send("You don't have permission to create a new owner.");
    }

    let { fullname, email, password } = req.body;

    let createdOwner = await ownerModel.create({
      fullname,
      email,
      password,
    });
    res.status(201).send(createdOwner);
  });
}

router.get("/", (req, res) => {
  res.send("Hey it's working!");
});

router.get("/admin", (req, res) => {
  let success = req.flash("success");
  res.render("createproducts", { success });
});

module.exports = router;

/*

Run command : set NODE_ENV=development
to set the node environment variable. It gets saved in device memory. Need that for various testing purposed during development

*/
