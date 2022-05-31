import cron from 'node-cron';
import { Automation } from '../automation/upsert-articles-to-db.js';

function UpsertArticlesToDatabaseAutomation() {
    cron.schedule('* * 9 * * *', async () => {
        Automation.run();
        });
}

export { UpsertArticlesToDatabaseAutomation };




