import React, { Component } from 'react';
import NewsItem from './NewsItem';
import { wait } from '@testing-library/user-event/dist/utils';

export class NewsContainer extends Component {
  
  constructor(){
    super();
    this.state={
      articles:[],
      loading:false
    }
  }

  async componentDidMount()
  {
    let url='https://newsapi.org/v2/top-headlines?country=us&apiKey=dbe57b028aeb41e285a226a94865f7a7';
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles:parsedData.articles});
    console.log(this.parsedData.articles);
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>News Monkey - Top Headlines</h2>
        <div className='row'>
        {this.state.articles.map((e)=>{
          return <div className='col=md-4' key={e.url}>
            <NewsItem title={e.title?e.title.slice(0,45):''} description={e.description?e.description.slice(0,88):''}
            imageUrl={e.urlToImage} newsUrl={e.url} />
          </div>
        })}
        </div>
      </div>
    )
  }
}

export default NewsContainer
