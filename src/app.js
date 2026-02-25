import dotenv from "dotenv";
dotenv.config();
import { startCron } from "./cron.js";

startCron();