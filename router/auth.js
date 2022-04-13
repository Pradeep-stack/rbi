const express = require('express');
const router = express.Router();
const User = require("../model/userSchema")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const authanticate = require("../middleware/authanticate")

// router.get('/', (req, res) => {
//     res.send(`Hello world from the server rotuer js`);
// });

router.post('/register', async (req, res) => {

    const {name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ erorr: "Please filled the fild properly" });

    } try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ erorr: "Email already Exist" });
        } else if (password != cpassword) {
            return res.status(422).json({ erorr: "Password not match" });
        } else {
            const user = new User({name, email, phone, work, password, cpassword });
            await user.save();

            res.status(201).json({ message: "user registed succefully" });
        }
        // const user = new User({name, email, phone, work, password, cpassword });
        // await user.save();

        // res.status(201).json({ message: "user registed succefully" });

    } catch (err) {
        console.log(err);

    }
});

router.post('/signin', async (req, res) => {
    try {
        const { email, password, work } = req.body;

        // if (!email || !password || !work) {
            if (!email || !password ) {
            return res.status(400).json({ error: "Please fill the tha data" });
        }
        // const userLogin = await User.findOne({ email: email, work: work });
        const userLogin = await User.findOne({ email: email});
        // console.log(userLogin);

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();
           console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 60000000000),
                httpOnly: true
            });

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credientials " });
            } else {
                res.json({ message: " User signin sucssfully" , user:userLogin});
            }
        } else {
            res.status(400).json({ error: "Invalid Credientials" });
        }

    } catch (err) {
        console.log(err);

    }
})
router.get('/users',async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (err) {
        res.status(400).send(err)
    }
});

router.get('/user/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const user = await User.findById({_id})
        res.send(user)
    } catch (err) {
        res.status(500).send(err)
    }
});


router.patch('/update/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const user = await User.findByIdAndUpdate(_id, req.body, {
            new: true
        } )
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
       
        const user = await User.findByIdAndDelete(req.params.id) 
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
});
router.get('/logout', (req, res) => {
    console.log("logout page");
    res.clearCookie('jwtoken', { path: '/' });
    res.status(200).send("User Logout");
});

router.get('/about', authanticate, (req, res) => {
    console.log(`Hello my About`);
    res.send(req.rootUser);
});

router.get('/usersdata',async (req, res) => {
    try {
        const userdata = await User.find({work: {$in:["user", "bank"]}})
        // const userdata = await User.find({})
        res.send(userdata)
    } catch (err) {
        res.status(400).send(err)
    }
});

module.exports = router;