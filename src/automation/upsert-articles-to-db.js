import { SpaceflightnewsArticles } from "../services/spaceflightnews.service.js";
import { Article } from "../models/article.js";

class AutomationFlow {
   async run() {
        let articlesAmount = await SpaceflightnewsArticles.articlesAmount();
        let currentArticle = 1;
        let articlesPerRequest = 1;

        for (currentArticle; currentArticle <= articlesAmount; currentArticle++) { 
             const getArticle = await SpaceflightnewsArticles.listArticles(currentArticle, articlesPerRequest);
             const { id, featured, title, url, imageUrl, newsSite, summary, publishedAt, provider } = getArticle[0];

             const filter = { id: id };
             const update = { id: id, featured: featured, title: title, url: url, imageUrl: imageUrl, newsSite: newsSite, summary: summary, publishedAt: publishedAt, launches: [{ id: id, provider: provider }], events: [{ id: id, provider: provider }]};
             const options = { new: true, upsert: true };

             let newArticle = await Article.findOneAndUpdate(filter, update, options);
             
             if (currentArticle >= articlesAmount) {
                console.log(`${newArticle.title} \u001b[1;32m${currentArticle}\u001b[0m/\u001b[1;32m${articlesAmount}\u001b[0m`); 
                return
             } else {
                console.log(`${newArticle.title} \u001b[1;31m${currentArticle}\u001b[0m/\u001b[1;32m${articlesAmount}\u001b[0m`); 
             }
         } 
    }
}

const Automation = new AutomationFlow();
export { Automation }



