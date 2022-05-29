import { Article } from '../models/article.js';

class ArticleController {
    async listAll(req, res) {
        try {
            const articles = await Article.find().exec();
            return res.status(200).json(articles);               
        } catch(err) {
            return res.status(500).json({ message: err.message });
        }
    };

    async listById(req, res) {
        try {
            const { id } = req.params
            const article = await Article.find({ id: id }).exec();
            return res.status(200).json(article);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    };

    async create(req, res) {
        try {
            const { id, featured, title, url, imageUrl, newsSite, summary, publishedAt, provider } = req.body;
            const ArticleModel = new Article({
                id: id,
                featured: featured,
                title: title,
                url: url,
                imageUrl: imageUrl,
                newsSite: newsSite,
                summary: summary,
                publishedAt: publishedAt,
                launches: [
                    {
                        id: id,
                        provider: provider,
                    },
                ],
                events: [
                    {
                        id: id,
                        provider: provider,
                    },
                ],
            });

            await ArticleModel.save();
            return res.status(201).json(ArticleModel);
        } 
        catch (err) {
         return res.status(500).json({ message: err.message });
       }  
     };

    async updateById(req, res) {
        try {
            const { id } = req.params;
            const { featured, title, url, imageUrl, newsSite, summary, provider } = req.body;

            const filter = { id: id };
            const update = { featured: featured, title: title, url: url, imageUrl: imageUrl, newsSite: newsSite, summary: summary, provider: provider };

            const article = await Article.findOneAndUpdate(filter, update, {
                new: true
            }).exec();
            return res.status(200).json(article);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    };
    
    async deleteById(req, res) {
        try {
            const { id } = req.params
            await Article.findOneAndDelete({ id: id });
            return res.status(204).send("");
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    };
}

const Articles = new ArticleController();
export { Articles }