import puppeteer from "puppeteer";
import { discordService } from "../services/discordService.js"

export const freelasScraper = {
    scrapingNineNine: async () => {
        const $browser = await puppeteer.launch({
    headless: "new",
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
});
        const $page = await $browser.newPage();
        
        await $page.goto(process.env.NINENINEFREELANCE_URL, {
            waitUntil: "networkidle2"
        });

        const projects = await $page.evaluate(() => {
            const $items = document.querySelectorAll("li.result-item");

            return Array.from($items).map($item => {
                const $linkElement = $item.querySelector("h1 a");
                
                return {
                    title: $linkElement?.innerText.trim(),
                    url: $linkElement?.href,
                };
            });
        });

        const $content = await $page.content();

        console.log(projects);

        await $browser.close()    
        return projects;
    },
    scrapingWorkana: async () => {
        const $browser = await puppeteer.launch({
    headless: "new",
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
});
        const $page = await $browser.newPage();
        
        await $page.goto(process.env.WORKANA_URL, {
            waitUntil: "networkidle2"
        });

        const projects = await $page.evaluate(() => {
            const $items = document.querySelectorAll("div.project-item");

            return Array.from($items).map($item => {
                const $linkElement = $item.querySelector("span a");
                const $valueElement = $item.querySelector(".budget .values span");
                
                return {
                    title: $linkElement?.innerText.trim(),
                    url: $linkElement?.href,
                    value: $valueElement?.innerText.trim()
                };
            });
        });

        const $content = await $page.content();

        console.log(projects);

        await $browser.close()    
        return projects;
    }
}

async function nineMain() { 
    const jobs = await freelasScraper.scrapingNineNine()

    for (const job of jobs) {
        await discordService.sendMensage(job, "ninenine");
    }
}

async function workanaMain() { 
    const jobs = await freelasScraper.scrapingWorkana();

    for (const job of jobs) {
        await discordService.sendMensage(job, "workana");
    }
}

export async function mainScraper () {
    await workanaMain();
    await nineMain();
}