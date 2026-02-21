import axios from "axios";
import * as cheerio from "cheerio";
import {scrapingService} from "./scraper/freelasScreper.js"
import dotenv from "dotenv";
dotenv.config();

async function sendMensage() {
    
    try {
        await axios.post(process.env.DISCORD_WEBHOOK, {
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


scrapingService.scraping()