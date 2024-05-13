import express from "express";
import cors from 'cors'
import { routes} from "./routes/_index";
import * as dotenv from "dotenv";
dotenv.config();


const app = express();

app.use(express.static('public'));

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: process.env.ORIGIN
}))


app.use(routes);

export { app }