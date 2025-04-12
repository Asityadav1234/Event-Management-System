const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const setAdmin = async (req, res) => {
    const secret = JWT_SECRET;
    const payload = {
        email: req.body.email,
    };

    const token = await jwt.sign(payload, secret);

    const new_admin = new Admin({
        pass: req.body.password,
        email: req.body.email,
        name: req.body.name,
        admin_id: token,
    });

    await new_admin.save((error, success) => {
        if (error) console.log(error);
        else console.log("Saved");
    });

    res.status(200).send({ msg: "Credentials Added" });
};

const adminAuth = async (req, res) => {
    const Email = req.body.email;
    const Pass = req.body.password;

    Admin.find({ email: Email }, async function (err, docs) {
        if (docs.length === 0) {
            return res.status(400).send({ msg: "Admin access denied" });
        } else if (Pass === docs[0].pass) {
            res.status(200).send({
                msg: "Success",
                admin_token: docs[0].admin_id,
            });
        } else {
            return res.status(400).send({ msg: "Email or Password is wrong" });
        }
    });
};
require("./models/otpAuth");
require("./models/user");
require("./models/admin");
require("./models/event");
