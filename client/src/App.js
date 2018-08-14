import React, { Component } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Articles from './Components/Articles'
import Search from './Components/Search'
import Saved from './Components/Saved'
import Header from './Components/Header'
import Footer from './Components/Footer'
import API from './utils/API'
import axios from 'axios'


class App extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      saved: []
    };

    this.getArticles();
    this.scrapeNew = this.scrapeNew.bind(this);
    this.saveArticle = this.saveArticle.bind(this);
    this.getArticles = this.getArticles.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.postComment = this.postComment.bind(this);
  }

  // ORDER OF EVENTS: 
  // Search for new articles - scrapeNew
  // Save an article to db - saveArticle
  // Display saved articles - getArticles
  // Delete a saved article - deleteArticle


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
        console.log(this.state.articles);
      })
      .catch(err => console.log(err));
      };
  

  // POST: Save an article to db
  saveArticle = (article) => {
    //console.log("Saved article:" + article.title);
    API.saveArticle(article)
      .then(res => {
        console.log("Saved article to db: " + res.data.title);
        this.setState({
          saved: [...this.state.saved, res.data]
        });
        console.log(this.state.saved)
      })
      .catch(err => console.log(err));
  };

  // GET: all saved articles
  getArticles() {
    //console.log(article);
    API.getArticles()
      .then(res => {
        this.setState({
          saved: res.data
        })
        //console.log("All Saved Articles in db: " + res.data)
      })
      .catch(err => console.log(err));
  };

  // DELETE + id: Delete an article from db then set state to a get request of all books???
  deleteArticle = (id) => {
    API.deleteArticle(id)
      .then(this.getArticles())
      .catch(err => console.log(err));
  };

  // POST: A comment to a specific article id
  postComment = (id, comment, username) => {
    var newComment = {
      comment: comment,
      username: username
      }
    
    document.getElementById('commentInput').value = "";
    document.getElementById('usernameInput').value = "";

    API.postComment(id, newComment)
      .then(res => {
        console.log(res)

        this.getArticles()
      })
      .catch(err => console.log(err));
  }




  render() {
    let renderSearches =
      this.state.articles.map(i =>
        <Articles
          key={i._id}
          link={i['web_url']}
          title={i['headline']['main']}
          snippet={i['snippet']}
          saveArticle={this.saveArticle}
          pubDate={i['pub_date']}
        />
      );

    let renderSaved =
      this.state.saved.map(i =>
        <Saved
          title={i.title}
          link={i.link}
          snippet={i.snippet}
          date={i.date}
          id={i._id}
          key={i._id}
          delete={this.deleteArticle}
          comment={this.postComment}
          comments={i.comments}
         
        />

      );

    return (
      <div id="App">

        <Navbar />

      <div id='Content'>
       
        <div id='searchDiv'>
          <Header title='Article Search' />
          <Search
            scrapeNew={this.scrapeNew}
          />
        </div>
        

       {this.state.articles !== 0 ?
          <div id="articlesDiv">
         
            <Header title='Search Results' />
            <div id='articles'>
              {renderSearches}
            </div>
          </div>
          : null
        }



        {this.state.saved !== 0 ?
          <div id="savedArticlesDiv">
            
              <Header title='Saved Articles' />
           
            {renderSaved}
          </div>


          : null}
         
      </div>

      <Footer />
      </div>
   

    )
  }
}


export default App;