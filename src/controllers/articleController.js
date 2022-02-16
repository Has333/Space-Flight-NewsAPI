import Article from '../models/article.js'
import express from 'express';
const router = express.Router();

router.post("/articles", async (req, res) => {
   try {
    const newArticle = new Article({
        id: req.body.id,
        featured: req.body.featured,
        title: req.body.title,
        url: req.body.url,
        imageUrl: req.body.imageUrl,
        newsSite: req.body.newsSite,
        summary: req.body.summary,
        publishedAt: req.body.publishedAt,
        launches: [
            {
                id: req.body.id,
                provider: req.body.provider
            }
        ],
        events: [
            {
                id: req.body.id,
                provider: req.body.provider
            }
        ]
     });
    
     await newArticle.save();

     res.status(200).send("Database updated with new article");
    } 

   catch (err) {
    console.log(err)
    res.status(500).send("Unable to update database with new article");
  }  
});

router.put("/articles/:id", async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        Object.assign(article, req.body);
        article.save()
        res.status(200).send("Article successfully updated");
    } catch (err) {
        console.log(err)
        res.status(500).send("Unable to successfully update article");
    }
});

router.delete("/articles/:id", async (req, res) => {
 try {
     const article = await Article.findById(req.params.id);
     await article.remove();
     res.status(200).send("Article successfully deleted")
 } catch (err) {
     console.log(err)
     res.status(500).send("Unable to successfully delete article")
 }
});

export default router;