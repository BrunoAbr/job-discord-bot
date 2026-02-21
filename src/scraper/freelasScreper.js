import puppeteer from "puppeteer";
import dotenv from "dotenv";
dotenv.config();

export const scrapingService = {
    scraping: async () => {
        const $browser = await puppeteer.launch();
        const $page = await $browser.newPage();
        
        await $page.goto(process.env.FREELANCE_URL, {
            waitUntil: "networkidle2"
        });

        const projects = await $page.evaluate(() => {
            const $items = document.querySelectorAll("li.result-item");

            return Array.from($items).map($item => {
                const $linkElement = $item.querySelector("h1 a");
                
                return {
                    title: $linkElement?.innerText.trim(),
                    link: $linkElement?.href
                };
            });
        });

        const $content = await $page.content();

        console.log(projects);

        await $browser.close()    

    }
}