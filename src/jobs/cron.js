import cron from 'node-cron';
import { Automation } from '../automation/upsert-articles-to-db.js';

function UpsertToDatabaseAutomation() {
    cron.schedule('* * * * * *', async () => {
        Automation.run()
        });
}

export { UpsertToDatabaseAutomation };




