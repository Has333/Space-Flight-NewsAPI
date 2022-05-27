import Article from '../models/article.js';

class ArticleController {
    async listAll(req, res) {
        try {
            const articles = await Article.find().exec();

            return res.json(articles)                
        } catch(err) {
            return res.status(500).json(err)
        }
    }

    async listById(req, res) {
        try {
            const { id } = req.params
            const article = await Article.find({ id: id }).exec()
            return res.json(article)
        } catch (err) {
            return res.status(500).json({ message: err.message});
        }
    }

    async create(req, res) {
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

            return res.status(201).json(newArticle);
        } 
        catch (err) {
         return res.status(500).json({ message: err.message});
       }  
     };

    async updateById(req, res) {
        try {
            const { id } = req.params;

            const article = await Article.findOneAndUpdate({id}).exec();
            // Object.assign(article, req.body);
            return res.json(article);
        } catch (err) {
            return res.status(500).json({ message: err.message});
        }
    }
    
    async deleteById(req, res) {
        try {
            const { id } = req.params
            await Article.findOneAndDelete({id});
            // await article.remove();
            return res.status(204).send("")
        } catch (err) {
            return res.status(500).json({ message: err.message});
        }
    };
}

const Articles = new ArticleController();
export { Articles }