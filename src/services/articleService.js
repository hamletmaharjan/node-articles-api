const knex = require('../db');


exports.fetchAllArticles = () => {
	return knex.select().table('articles')
	.then((articles)=> {
	    let result = articles.map(function (article) { 
	        article.image = "/images/" + article.image;
	        return article;
	    });
	    return result;
  	});
}

exports.fetchArticleById = (id) => {
	return knex('articles').where('id', id).first()
	.then((article) => {
      	let result = article;
        result.image = "/images/" + result.image;
        return result;
    })
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


