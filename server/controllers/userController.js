const User = require('../models/User');


module.exports.register = async (req, res) => {

    try {

User.create(req.body);
res.send({success: true, message: "User registered successfully"}) 
        
    } catch (error) {
        console.log("Register Error", error.message);
        res.send({success: false, error: error.message})
    }

}