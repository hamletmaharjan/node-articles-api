const knex = require('../db');


exports.fetchAllArticles = () => {
	return knex.select().table('articles');
}

exports.fetchArticleById = (id) => {
	return knex('articles').where('id', id).first();
}

exports.createArticle = (article) => {
	return knex('articles').insert(article);
}

exports.updateArticle = (id, article) => {
	return knex('articles')
	.where('id', '=', id)
	.update(article);
}

exports.deleteArticle = (id) => {
	return knex('articles')
  	.where('id', id)
  	.del();
}


