import React, { Component } from "react";
import "./Articles.css";
import formatDate from '../../utils/formatDate'

class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      article: [...this.props]
      
    };

  }

  render() {
  
   

    return (
      // RENDER SEARCHED ARTICLES 

        <div id='articleDiv'>
          <header>
            <a href={this.props.link} target="_blank">
              <p>{this.props.title}</p> 
            </a>
            <div class='time'>{formatDate(this.props.pubDate)}</div> 
          </header>

           {/* <p>{this.props.date}</p>  */}
          <div class='content'>{this.props.snippet}</div>
   
          
          <button class="btn waves-effect waves-light" type="submit" id="run-search" value='Submit' onClick={() => { this.props.saveArticle(this.props) }}>Save Article</button> 

        </div>

        );

  }
}
export default Articles;


