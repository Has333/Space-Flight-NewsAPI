import { Automation } from '../automation/upsert-articles-to-db.js';
import cron from 'node-cron';

function UpsertArticlesToDatabaseAutomation() {
    cron.schedule('* * 9 * * *', async () => {
        Automation.run();
        });
}

export { UpsertArticlesToDatabaseAutomation };




