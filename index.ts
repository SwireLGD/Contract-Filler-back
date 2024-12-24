import express from "express";
import cors from "cors";
import captchaRouter from "./routers/captcha";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use('/verify', captchaRouter);

const run = async () => {

    app.listen(port, () => {
        console.log(`Port: ${port}`);
    });

};

void run();