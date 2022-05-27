import { SpaceflightnewsArticles } from "../services/spaceflightnews.service.js";

class AutomationFlow {
    async run() {
        let start = 0;
        let limit = 50;
        let reachLimit = true;
        
        while(reachLimit) {
            const Articles = await SpaceflightnewsArticles.listAll({start, limit});
        }
    }
}

const Automation = new AutomationFlow();
export { Automation }



