import * as cheerio from "cheerio";
import {freelasScraper} from "./scraper/freelasScraper.js"
import dotenv from "dotenv";
import { discordService } from "./services/discordService.js";
import { FreelanceModel } from "./models/jobModel.js";
dotenv.config();



async function nineMain() { 
    const jobs = await freelasScraper.scrapingNineNine()

    for (const job of jobs) {
        await discordService.sendMensage(job, "ninenine");
    }
}

async function workanaMain() { 
    const jobs = await freelasScraper.scrapingWorkana()

    for (const job of jobs) {
        await discordService.sendMensage(job, "workana");
    }
}

async function main () {
    await workanaMain();
    await nineMain();
}

main()