const userArticleService = require('../services/userArticleService');

exports.fetchAll = (req, res, next) => {
	userArticleService.fetchAllArticles(req.params.id)
	.then(data => res.json({data}))
    .catch(err => next(err));
}

exports.fetchById = (req, res, next) => {
    userArticleService.fetchArticleById(req.params.id, req.params.articleId)
	.then(data => res.json({data}))
    .catch(err => next(err));
}