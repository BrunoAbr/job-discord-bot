import cron from "node-cron";
import {mainScraper} from "./scraper/freelasScraper.js";

let isRunning = false;

export function startCron() {
    cron.schedule("0 12 * * *", async () => {
        if (isRunning) return;

        isRunning = true;

        console.log("Starting script...");

        try {
            await mainScraper();
        } catch (error) {
            console.error("Cron Error", error.message);
        } finally {
            isRunning = false;
        }
    })
}