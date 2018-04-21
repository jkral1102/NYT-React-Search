const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  key: {type: Number },
  title: { type: String},
  link: { type: String },
  snippet: String,
  date: { type: Date, default: Date.now },
  comment: []
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
