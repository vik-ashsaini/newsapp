import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class NewsContainer extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=1&pagesize=10";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles,totalResults:parsedData.totalResults });
    console.log(parsedData)
  }

  previousPage = async () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page-1}&pagesize=10`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ 
      articles: parsedData.articles,
      page:this.state.page-1
    });
  }

  nextPage = async () =>{
    if(this.state.page+1>Math.ceil(this.state.totalResults/10))
    {

    }
    else
    {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page+1}&pagesize=10`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ 
        articles: parsedData.articles,
        page:this.state.page+1
      });
    }    
  }

  render() {
    return (
      <div className="container my-3">
        <h2>News Monkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((e) => {
            return (<div className="col=md-4" key={e.url}>
                <NewsItem title={e.title ? e.title.slice(0, 45) : ""} description={e.description ? e.description.slice(0, 88) : ""}
                  imageUrl={e.urlToImage} newsUrl={e.url} />
              </div>);
          })}
        </div>
        <div className="row d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.previousPage}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.nextPage}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default NewsContainer;
