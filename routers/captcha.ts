import axios from "axios";
import express from "express";
require('dotenv').config()

const captchaRouter = express.Router();
const SECRET_KEY = process.env.SECRET_KEY

captchaRouter.post('/verify', async (req, res, next) => {
    try {
        const { captchaValue } = req.body;
        const { data } = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${captchaValue}`,);
        res.send(data);
    } catch (e) {
        next (e);
    }
});

export default captchaRouter;