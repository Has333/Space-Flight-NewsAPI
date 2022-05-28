import { SpaceflightnewsArticles } from "../services/spaceflightnews.service.js";
import "dotenv/config";

class AutomationFlow {
    async run() {
        function sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms))
          };

        let article = 1;
        let limit = await SpaceflightnewsArticles.articlesAmount();

        while(article < limit){
            sleep(3000);
            const getArticle = await SpaceflightnewsArticles.listArticles(article, 1);
            console.log(getArticle)
            article ++;
        };
    }
}

const Automation = new AutomationFlow();
export { Automation }



