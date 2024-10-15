const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

isLoggedIn = async (req, res, next) => {
  if (!req.cookies.token) {
    req.flash("error", "You need to login first");
    res.redirect("/");
  }

  try {
    let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
    let user = await userModel
      .findOne({ email: decoded.email })
      .select("-password"); //since we need only email and not password
    req.user = user; //sending in the user's data with the req to the controller whenever this control goes to this middleware
    next();
  } catch (err) {
    req.flash("error", "Something went wrong!");
    res.redirect("/");
  }
};

module.exports.isLoggedIn = isLoggedIn;
