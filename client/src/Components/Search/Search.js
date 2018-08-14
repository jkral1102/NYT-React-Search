import React, { Component } from 'react';
import "./Search.css";

class Search extends Component {
  constructor() {
    super();

    this.state = {
      search: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange = event => {
    this.setState({
      search: event.target.value
    })
  }


  render() {
    return (
      // SEARCH FOR NEW ARTICLES
      <div id="searchForm">
        {/* <label for="search">Search Term:</label> */}
        <input id='searchInput' type="text" onChange={this.handleChange} placeholder="Search NYT Articles..." />
        <button className="btn waves-effect waves-light" type="Submit" onClick={() => this.props.scrapeNew(this.state.search)}> Search</button>
        {/* <button type="button" className="btn btn-default" id="clear-all"> Clear Results</button> */}
      </div>
    );
  }
}

export default Search;
