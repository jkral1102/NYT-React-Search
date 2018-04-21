import React, { Component } from "react";
import "./Articles.css";

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

        <div>
          <div className="header">
            <a href={this.props.link} target="_blank"><h3 className="title">{this.props.title}</h3>  </a>
          </div>

          {/* <p>{this.props.date}</p> */}
          <p>{this.props.snippet}</p>
   
          
          <button className="btn waves-effect waves-light" type="submit" id="run-search" value='Submit' onClick={() => { this.props.saveArticle(this.props) }}>Save Article</button> 

        </div>

        );

  }
}
export default Articles;


