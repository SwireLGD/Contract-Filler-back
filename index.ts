import express from "express";
import cors from "cors";
import captchaRouter from "./routers/captcha";
import axios from "axios";

const app = express();
const port = 8000;

const SECRET_KEY = process.env.SECRET_KEY

app.use(cors());
app.use(express.json());
// app.use('/verify', captchaRouter); почему-то не работает, если я использую роутер :(

app.post('/verify', async (req, res, next) => {
    try {
        const { captchaValue } = req.body; 
        const { data } = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${captchaValue}`,);
        res.send(data);
    } catch (e) {
        next (e);
    }
});

const run = async () => {

    app.listen(port, () => {
        console.log(`Port: ${port}`);
    });

};

void run();