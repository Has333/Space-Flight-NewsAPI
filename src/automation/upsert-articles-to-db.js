import { SpaceflightnewsArticles } from "../services/spaceflightnews.service.js";
import { articleConfigModel } from "../common/helpers/articleConfig.helper.js";
import { Article } from "../models/article.js";

class AutomationFlow {
   async run() {
        let articlesAmount = await SpaceflightnewsArticles.articlesAmount();
        let currentArticle = 1;
        let articlesPerRequest = 1;

        for (currentArticle; currentArticle <= articlesAmount; currentArticle++) { 
             const getArticle = await SpaceflightnewsArticles.listArticles(currentArticle, articlesPerRequest);
             const { id, featured, title, url, imageUrl, newsSite, summary, publishedAt, provider } = getArticle[0];
             const articleConfig = articleConfigModel(id, featured, title, url, imageUrl, newsSite, summary, publishedAt, provider); 

             let newArticle = await Article.findOneAndUpdate(articleConfig.filter, articleConfig.update, articleConfig.options);
             
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



