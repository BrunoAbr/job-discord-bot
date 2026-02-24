import axios from "axios";
import { utils } from "../utils/utils.js";

export const discordService = {
    sendMensage: async ({title, url, description=null, value="A combinar"}, origin) => {
        try {
            await axios.post(process.env.DISCORD_WEBHOOK, {
                content: "🚀 Nova vaga encontrada!",
                embeds: [{
                    "color": "80",
                    "title": title,
                    "description": description,
                    "url": url,
                    "thumbnail": {
                        "url": origin === "ninenine" ? process.env.NINENINEFREELANCE_IMG : process.env.WORKANA_IMG,
                        },
                    "fields": [{
                        "name": "Valor",
                        "value": value
                    }]
                }]
            });
            console.log("Mensagem enviada");
            await utils.sleep(10000)
        } catch (error) {
            console.error("Erro ao enviar mensagem:", error.message);
            console.error()       
        }
    }
}