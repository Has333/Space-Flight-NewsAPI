import cron from 'node-cron';
import fetch from 'node-fetch';

cron.schedule('* * * * * *', async () => {
 console.log('Task running');

 const response = await fetch('localhost:8000/articles');
 const data = await response.json();
console.log(data)
});