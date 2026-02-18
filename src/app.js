import axios from "axios";
import * as cheerio from "cheerio";
import puppeteer from "puppeteer";
import dotenv from "dotenv";
dotenv.config();

const FREELANCE_URL = "https://www.99freelas.com.br/projects?categoria=web-mobile-e-software";
async function sendMensage() {
    
    try {
        await axios.post(DISCORD_WEBHOOK, {
            content: "Teste de vaga sendo enviada",
            embeds: [{
                "color": "80",
                "title": "Titulo da vaga",
                "description": "vaga de XPTO - Empresa KAKA",
                "url": "https://google.com",
                "thumbnail": {
                    "url": 'https://i.imgur.com/AfFp7pu.png',
                    },
                "footer": {
                    "name": "teste222",
                    "value": "teste2222"
                },
                "image": {
                    "url": 'https://i.imgur.com/AfFp7pu.png',
                },
                "fields": [{
                    "name": "Test field",
                    "value": "some value here"
                }]
            }]
        });
        console.log("Mensagem enviada");
    } catch (error) {
        console.error("Erro ao enviar mensagem:", error.message);        
    }
}

async function scraping() {
    const $browser = await puppeteer.launch();
    const $page = await $browser.newPage();
    
    await $page.goto(FREELANCE_URL, {
        waitUntil: "networkidle2"
    });

    const projects = await $page.evaluate(() => {
        const $items = document.querySelectorAll("li.result-item");

        return Array.from($items).map($item => {
            const linkElement = $item.querySelector("h1 a");
            
            return {
                title: linkElement?.innerText.trim(),
                link: linkElement?.href
            };
        });
    });

    const $content = await $page.content();

    console.log(projects);

    await $browser.close()
    

}

scraping()