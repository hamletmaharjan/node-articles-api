const knex = require('../db');


exports.fetchAllArticles = (userId) => {
	return knex('articles').where('user_id', userId);
}

exports.fetchArticleById = (userId, articleId) => {
	return knex('articles').where({
        user_id: userId,
        id:  articleId
    }).first();
}