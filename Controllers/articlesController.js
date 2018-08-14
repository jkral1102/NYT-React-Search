const db = require("../models");

// Defining methods for the articlesController
module.exports = {
  findAll: function(req, res) {
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));

  },

  findById: function(req, res) {
    db.Article
      .findById(req.params.id)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.Article
      .create(req.body)
      //.then(console.log(req.body))
      .then(data =>{
         res.json(data)
        })
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    db.Article
      .findByIdAndUpdate(req.params.id,
        { $push: 
          {comments: 
            {comment: req.body.commentBody.comment, username: req.body.commentBody.username}}}
      ).then(data => data.save()).then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    db.Article
      .findById(
        { _id: req.params.id }
      )
      .then(data => data.remove())
      .catch(err => res.status(422).json(err));
  }
};
