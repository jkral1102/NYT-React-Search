import React, { Component } from 'react';
import "./Saved.css";
import trashIcon from './trash.png'
import formatDate from '../../utils/formatDate'

class Saved extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: "",
      username: "",
      showComments: false
    };

    //this.postComment = this.postComment.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.showComments = this.showComments.bind(this);
  }

  handleComment(event) {
    this.setState({ comment: event.target.value });
  }

  handleUsername(event) {
    this.setState({ username: event.target.value });
  }

  showComments() {
    this.setState({ showComments: !this.state.showComments })
  }




  render() {








    return (
      <div id="savedDiv">
        {/* Display saved articles */}
        <header>
          <a href={this.props.link} target="_blank">
            <p>{this.props.title}</p>
          </a>
          <p class='time'>{(formatDate(this.props.date))}</p>


        </header>

        <div class='contentRow'>
          <p class='content'> {this.props.snippet}</p>
          <button className="trash-btn btn waves-effect waves-light" type="submit" value='Submit' onClick={() => { this.props.delete(this.props.id) }}>
            <img src={trashIcon} alt='trash' />
          </button>
        </div>

        <div class='addCommentDiv'>
        <div>
          <input id='commentInput' onChange={this.handleComment} placeholder='Add a public comment...' />
          <input id='usernameInput' onChange={this.handleUsername} placeholder='Username' />
      </div>

          <button class="btn waves-effect waves-light" type="submit" value='Submit'
            onClick={() => {
              this.props.comment(this.props.id, this.state.comment, this.state.username)
            }}>
            Comment
          </button>
        </div>




        {this.props.comments !== 0 ?
          <div class="comments">
            <div class='commentsHeader'>
              <button class='btn waves-effect waves-light' onClick={this.showComments}> {this.props.comments.length} Comments
                </button>
            </div>

            {this.state.showComments === true ?
              this.props.comments.map((i, index) => (
                <div class='comment'>

                  <div class='commentHeader'>

                    <div class='time'>({formatDate(i.time)})</div>
                    <div class='name'><span>{i.username}</span></div>
                  </div>
                  <div class='content' key={index}> {i.comment} </div>

                </div>
              ))
              : null}
          </div>
          : null}




      </div>
    );
  }
}

export default Saved;
