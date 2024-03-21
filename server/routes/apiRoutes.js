const express = require('express');
const bcrypt = require('bcrypt')
const router = express.Router();
require('../DB/config')
const Doctor = require('../models/doctorSchema');
const User = require('../models/userSchema');


router.get('/', (req, res) => {
    res.send('Hello World!');
    console.log("Request received");

});

router.post('/add', async (req, res) => {

    // console.log("Adding user: ", req.body);
    const { name, email, password, cfpassword } = req.body;

    if (!name || !email || !password || !cfpassword) {
        return res.status(400).json({ error: 'Fill the fields properly' });
    }

    try {
        let userExist = await Doctor.findOne({ email: email });
        userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" });
        }
        // Check Password and Confirm Password are same
        if (password !== cfpassword) {
            return res.status(422).json({ error: "Password does not match with confirm password." })
        }

        const doctor = new Doctor({ name, email, password, cfpassword });
        let result = await doctor.save();

        return res.status(201).json({ message: "Doctor Register Successfully" });

    } catch (error) {
        console.log("Error in adding user", error);
        return res.status(500).json({ error: 'Server Error' });
    }

});

router.post('/adduser', async (req, res) => {

    // console.log("Adding user: ", req.body);
    const { name, email, password, cfpassword } = req.body;

    if (!name || !email || !password || !cfpassword) {
        return res.status(400).json({ error: 'Fill the fields properly' });
    }

    try {
        let userExist = await User.findOne({ email: email });
        userExist = await Doctor.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" });
        }
        // Check Password and Confirm Password are same
        if (password !== cfpassword) {
            return res.status(422).json({ error: "Password does not match with confirm password." })
        }

        const user = new User({ name, email, password, cfpassword });
        let result = await user.save();

        return res.status(201).json({ message: "User Register Successfully" });

    } catch (error) {
        console.log("Error in adding user", error);
        return res.status(500).json({ error: 'Server Error' });
    }

});


router.post("/login", async (req, res) => {

    try {
        const { email, password } = req.body;
        // console.log("Login User : ", req.body);
        if (!email || !password) {
            return res.status(400).json({ error: "Please provide all details." })
        }
        const doc = await Doctor.findOne({ email: email })
        const user = await User.findOne({ email: email })
        if (!doc && !user) {
            return res.status(401).json({ error: "Invalid Email or Password" })
        }
        let isMatchdoc, isMatchuser;
        if (doc) {
            isMatchdoc = await bcrypt.compare(password, doc.password);
        }
        else if (user) {
            isMatchuser = await bcrypt.compare(password, user.password);
        }
        // console.log(isMatch);
        if (isMatchuser) {
            return res.status(201).json({ message: "User Login Successfully" });
        }
        else if (isMatchdoc) {
            return res.status(201).json({ message: "Doctor Login Successfully" });
        }
        else {
            return res.status(401).json({ error: "Invalid Email or Password" });
        }

    } catch (error) {
        console.log('Error in login', error);
        return res.status(500).send();
    }

});




module.exports = router;