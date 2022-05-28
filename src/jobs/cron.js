import cron from 'node-cron';
import { Automation } from '../automation/upsert-articles-to-db.js';

function UpsertArticlesToDatabaseAutomation() {
    cron.schedule('* * * * * *', async () => {
        Automation.run()
        });
}

export { UpsertArticlesToDatabaseAutomation };




