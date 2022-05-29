import { SpaceflightnewsArticles } from "../services/spaceflightnews.service.js";
import { Article } from "../models/article.js";
import "dotenv/config";

class AutomationFlow {
    async run() {
        function sleep(ms) {return new Promise((resolve) => setTimeout(resolve, ms))};

        let articleLimit = await SpaceflightnewsArticles.articlesAmount();

        for ( let article = 1; article < articleLimit; article++ ) {
            const getArticle = await SpaceflightnewsArticles.listArticles(article, 1);

            const { id, featured, title, url, imageUrl, newsSite, summary, publishedAt, provider } = getArticle[0];
            const filter = { id: id };
            const update = { 
                id: id,
                featured: featured,
                title: title,   
                url: url,
                imageUrl: imageUrl,
                newsSite: newsSite,
                summary: summary,
                publishedAt: publishedAt,
                launches: [
                    {
                        id: id,
                        provider: provider,
                    },
                ],
                events: [
                    {
                        id: id,
                        provider: provider,
                    },
                ],
             };
            const options = { new: true, upsert: true };


            await sleep(10000);
            let newArticle = await Article.findOneAndUpdate(filter, update, options);
            console.log(`${newArticle} created`);
            article++
        };
    }
}

const Automation = new AutomationFlow();
export { Automation }



