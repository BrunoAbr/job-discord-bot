import * as cheerio from "cheerio";
import {freelasScreper} from "./scraper/freelasScreper.js"
import dotenv from "dotenv";
import { discordService } from "./services/discordService.js";
import { FreelanceModel } from "./models/jobModel.js";
dotenv.config();



async function main() { 
    const jobs = await freelasScreper.scrapingNineNine();

    for (const job of jobs) {
        await discordService.sendMensage(job);
    }
}

main()