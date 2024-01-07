import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class NewsContainer extends Component {
  render() {
    return (
      <div>
        NewsContainer
        <NewsItem />
      </div>
    )
  }
}

export default NewsContainer
