const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  key: {type: Number },
  title: { type: String},
  link: { type: String },
  snippet: String,
  date: { type: Date, default: Date.now },
  comments: [{
    comment: { type: String }, 
    time: {type: Date, default: Date.now }, 
    username: {type: String}
  }],

});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
