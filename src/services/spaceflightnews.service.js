import axios from 'axios';
import "dotenv/config";
const API = process.env.API_URL;

class SpaceflightnewsArticleService {
    async listAll(start, limit){
        const SpaceflightnewsDataResponse = await axios.get(API+`?_start=${start}&_limit=${limit}`);
        const SpaceflightnewsArticles = SpaceflightnewsDataResponse.data;

        console.log(SpaceflightnewsArticles)
        return SpaceflightnewsArticles
    }
}

const SpaceflightnewsArticles = new SpaceflightnewsArticleService();
export { SpaceflightnewsArticles }