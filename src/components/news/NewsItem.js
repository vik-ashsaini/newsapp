import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} =this.props;
    return (
      <div className='my-3'>
        <div className='card'>
          <img className='card-img-top' src={imageUrl?imageUrl:'https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/376700/376759.6.jpg'} alt=''/>
          <div className='card-body'>
            <h5 className='card-title'>{title}...</h5>
            <p className='card-text'>{description}...</p>
            <a href={newsUrl} target='_blank'rel="noreferrer"  className='btn btn-sm btn-dark'>Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
