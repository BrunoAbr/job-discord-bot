import puppeteer from "puppeteer";

export const freelasScreper = {
    scrapingNineNine: async () => {
        const $browser = await puppeteer.launch();
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
        return projects
    }
}