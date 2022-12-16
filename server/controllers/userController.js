const User = require("../models/User");

module.exports.register = async (req, res) => {
  try {

    console.log("hello from register", req.body);
    await User.create(req.body);

    res.send({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.log("Register Error", error.message);
    res.send({ success: false, error: error.message });
  }
};


module.exports.login = async (req, res) => {
  try {

    console.log("hello from register", req.body);

    const user = await User.findOne(req.body).select("-password -__v");


    res.send({ success: true,user });
  } catch (error) {
    console.log("Register Error", error.message);
    res.send({ success: false, error: error.message });
  }
};


module.exports.list = async (req, res) => {
  try {

    console.log("hello from register", req.body);

    const users = await User.find().select("-password");
    if(!users) return res.send({ success: false, errorId: 1 });


    res.send({ success: true,users });
  } catch (error) {
    console.log("Register Error", error.message);
    res.send({ success: false, error: error.message });
  }
};

