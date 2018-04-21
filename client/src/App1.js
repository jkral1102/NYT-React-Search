import React, { Component } from 'react';
//import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Articles from "./Components/Articles";
import Search from "./Components/Search";
import Saved from "./Components/Saved";
import API from "./utils/API";
import axios from 'axios';

// ~ FLEXBOX https://dev.to/llorentegerman/simple-layouts-with-flexbox-in-react-55kf https://www.npmjs.com/package/simple-flexbox
// or ! https://www.npmjs.com/package/flexbox-react    npm install --save flexbox-react
//import Flexbox from 'flexbox-react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      saved: []
    };


    this.styles = {

    }

    this.scrapeNew = this.scrapeNew.bind(this);
    this.saveArticle = this.saveArticle.bind(this);
    this.getArticles = this.getArticles.bind(this);
  }


  scrapeNew = (search) => {
    var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

    var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
      authKey + "&q=" + search;

    var authOptions = {
      "async": true,
      method: 'GET',
      url: queryURLBase,
      dataType: 'json'
    };
    return axios(authOptions)
      .then((response) => {
        // grab relevant response data
        var data = response.data.response.docs;

        this.setState({
          articles: data
        })
        //console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // GET: all saved articles on page load
  componentDidMount() {
    this.getArticles();
  }

  getArticles() {
    //console.log(article);
    API.getArticles()
      .then(res => this.setState({ this.saved.data: res.data }))  //!!
      .catch(err => console.log(err));
  };


  // POST: Save an article to db
  saveArticle = (article) => {
    //console.log("Saved article:" + article.title);
    API.saveArticle(article)
      .then(res => {
        this.setState({ saved: [...this.state.saved, res.data] })
          .catch(err => console.log(err));
      };
  }

  // DELETE + id: Delete an article from db then set state to a get request of all books???
  deleteArticle = (id) => {
    API.deleteArticle(id)
      // .then(res => this.setState({ saved: res.data }))
      .then(res =>
        /* re-display all articles */
        console.log("Deleted article: " + res.data)
      .catch(err => console.log(err);
  };

  // Future Code: 

  // GET + id: Search for a saved article in db

  // UPDATE + id: Update/Delete article comments 










  render() {
    //var imgLink = i['multimedia'][0]['url'] 
    // let savedArticles = this.state.saved.map(i =>
    //   <Saved
    //     key={i._id}
    //     link={i['web_url']}
    //     title={i['headline']['main']}
    //     snippet={i['snippet']}
    //     delete={this.deleteArticle}
    //   />
    // );
    return (
      <div id="wrapper">

        <Navbar />

        // {savedArticles}

        <Search handleSubmit={this.scrapeNew} />

        <div className="articleContainer">
          {this.state.articles.map(i =>

            <Articles
              key={i._id}
              link={i['web_url']}

              title={i['headline']['main']}

              snippet={i['snippet']}
              saveArticle={this.saveArticle}



            // {if (i['multimedia'][0]['url'].length > 0) {
            //   img={i['multimedia'][0]['url']}
            // }}


            //img="{ imgLink.length > 0 && {imgLink} : null}
            // or 
            // { imgLink.length > 0 && 
            //   img="{imgLink}"" : null}
            //   or 
            //   { i['multimedia'][0]['url'] .length > 0 && 
            //     img="{i['multimedia'][0]['url'] }"" : null}
            // ---
            // OR
            // var imgLink;
            // var link;
            // {this.state.articles.forEach(i) => {

            //   if i['multimedia'][0]['url'].length > 0 {
            //     imgLink = true;
            //   }

            />
          )}

        </div>

      </div>


    )
  }
}


export default App;