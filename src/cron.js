import cron from 'node-cron';
import fetch from 'node-fetch';

cron.schedule('* * * * * *', async () => {
 console.log('Task running');

 const response = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
 const data = await response.json();
 const newArticle = new Article({
    id: data.id,
    featured: data.featured,
    title: data.title,
    url: data.url,
    imageUrl: data.imageUrl,
    newsSite: data.newsSite,
    summary: data.summary,
    publishedAt: data.publishedAt,
    launches: [
        {
            id: data.id,
            provider: data.provider
        }
    ],
    events: [
        {
            id: data.id,
            provider: data.provider
        }
    ]
 });

newArticle.save();
});