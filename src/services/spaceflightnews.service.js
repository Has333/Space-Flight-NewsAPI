import axios from 'axios';
import "dotenv/config";
const API = process.env.API_URL;

class SpaceflightnewsArticleService {
    async listArticles(start, limit){
        const ArticlesDataResponse = await axios.get(API+`?_start=${start}&_limit=${limit}`);
        const Articles = ArticlesDataResponse.data;

        return Articles
    }

    async articlesAmount(){
        const ArticlesAmountDataResponse = await axios.get(API+'/count');
        const ArticlesAmount = ArticlesAmountDataResponse.data;

        return ArticlesAmount
    }
}

const SpaceflightnewsArticles = new SpaceflightnewsArticleService();
export { SpaceflightnewsArticles }