import React, { Component } from 'react';
import "./Saved.css";

class Saved extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentClick: false,
      comment: ""
    };

    this.postComment = this.postComment.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  postComment() {
    this.setState({
      commentClick: !this.state.commentClick
    })
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }



  render() {
    let Input = this.state.commentClick ?
      <div>
        <input id="commentInput" onChange={this.handleChange} />
        <button className="btn waves-effect waves-light" type="submit" id="run-search" value='Submit'
          onClick={() => { this.props.comment(this.props.id, this.state.comment) }}>
          Submit comment
        </button>
      </div>
      : null;

    let Comments = this.props.comments ?
      <div id="comments">
        <span id="commentsHeader">Comments</span>
        {this.props.comments.map((i, index) => (
          <span className='comment' key={index} >{i}</span>
        ))}
      </div>
      : null

    return (
      <div id="savedArticles">
        {/* Display saved articles */}
        <div className="header">
          <a href={this.props.link} target="_blank"><h3 className="title">{this.props.title}</h3>  </a>
        </div>
        <p> {this.props.snippet}</p>

        {Comments}

        {/* Delete article btn  */}
        <button className="btn waves-effect waves-light" type="submit" value='Submit' onClick={() => { this.props.delete(this.props.id) }}>Delete Article</button>

        {/* Comment article btn */}
        <button className="btn waves-effect waves-light" type="submit" value='Submit' onClick={() => { this.postComment() }}>Comment</button>

        {Input}


      </div>
    );
  }
}

export default Saved;
