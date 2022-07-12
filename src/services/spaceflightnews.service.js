import axios from 'axios';
import "dotenv/config";
class SpaceflightnewsArticleService {
    async listArticles(start, limit){
        const ArticlesDataResponse = await axios.get(`https://api.spaceflightnewsapi.net/v3/articles?_start=${start}&_limit=${limit}`);
        const Articles = ArticlesDataResponse.data;

        return Articles
    }

    async articlesAmount(){
        const ArticlesAmountDataResponse = await axios.get('https://api.spaceflightnewsapi.net/v3/articles/count');
        const ArticlesAmount = ArticlesAmountDataResponse.data;

        return ArticlesAmount
    }
}

const SpaceflightnewsArticles = new SpaceflightnewsArticleService();
export { SpaceflightnewsArticles }