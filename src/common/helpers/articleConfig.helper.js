function articleConfigModel(id, featured, title, url, imageUrl, newsSite, summary, publishedAt, provider) {
    const filter = { id: id };
    const update = { id: id, featured: featured, title: title, url: url, imageUrl: imageUrl, newsSite: newsSite, summary: summary, publishedAt: publishedAt, launches: [{ id: id, provider: provider }], events: [{ id: id, provider: provider }]};
    const options = { new: true, upsert: true };

    return { filter, update, options };
}

export { articleConfigModel }