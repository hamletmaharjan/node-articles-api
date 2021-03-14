const bcrypt = require('bcrypt');
const fs = require('fs')


const articleService = require('../services/articleService');

const path = 'uploads/images';


exports.fetchAll = (req, res, next) => {
	articleService.fetchAllArticles()
	.then(data => res.json({ data }))
    .catch(err => next(err));
}


exports.fetchById = (req, res, next) => {
	articleService.fetchArticleById(req.params.id)
	.then(data => res.json({ data }))
    .catch(err => next(err));
}

exports.create = (req, res, next) => {
    let filename = 'default.jpg';
    console.log(req.file);
    if(req.file) {
        filename = req.file.filename;
    }
	const article = {
		title: req.body.title,
		description: req.body.description,
		image: filename,
		user_id: req.user.id
	};
	articleService.createArticle(article)
	.then(data => res.json({ data }))
    .catch(err => next(err));
}

exports.update = (req, res, next) => {
    articleService.fetchArticleById(req.params.id)
	.then((data) => {
        if(data.user_id === req.user.id) {
            let article = req.body;
            if(req.file) {
                article.image = req.file.filename;
                if(data.image != 'default.jpg') {
                    try {
                        fs.unlinkSync(path+ '/' +data.image);
                    } catch(err) {
                        console.error(err)
                    }
                }
            }
           return articleService.updateArticle(req.params.id, article)
        }
        else {
            res.json({msg: "not ur article"});
        }
    })
    .then(data => res.json({ data }))
    .catch(err => next(err));
	
}

exports.delete = (req, res, next) => {
	articleService.fetchArticleById(req.params.id)
	.then((data) => {
        if(data.user_id === req.user.id) {
            if(data.image != 'default.jpg') {
                try {
                    fs.unlinkSync(path+ '/' +data.image);
                } catch(err) {
                    console.error(err)
                }
            }
            return articleService.deleteArticle(req.params.id)
        }
        else {
            res.json({msg: "not ur article"});
        }
    })
    .then(data => res.json({ data }))
    .catch(err => next(err));
}